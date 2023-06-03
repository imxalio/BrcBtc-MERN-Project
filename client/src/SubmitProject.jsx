import { useContext, useState } from 'react';
import { ProjcetContext } from './App';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import RemoveProject from './RemoveProject';
import { useEffect } from 'react';

const SubmitProject = () => {
  const { newItem, setNewItem, apiUrl, setAllItems } =
    useContext(ProjcetContext);

  const [image, setImage] = useState(null);
  const [imageViewer, setImageViewer] = useState();

  const [keyForm, setKeyForm] = useState('');
  const [access, setAccess] = useState('');
  const [check, setCheck] = useState(null);

  useEffect(() => {
    if (keyForm === 'ProjectBrc@70$') {
      localStorage.setItem('key', keyForm);
    }
  }, [keyForm]);

  const accessBtn = () => {
    setKeyForm(access);
    if (keyForm !== 'ProjectBrc@70$') setCheck(true);
    setAccess('');
  };

  const handleAccess = (e) => {
    setAccess(e.target.value);
    setCheck(null);
  };

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setImage(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageViewer(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', newItem.name);
    form.append('description', newItem.description);
    form.append('twitter', newItem.twitter);
    form.append('discord', newItem.discord);
    form.append('date', newItem.date);
    form.append('image', image);

    axios
      .post(apiUrl, form)
      .then((res) => {
        setAllItems(res.data.allProjects);
        alert('If you got this alert, so the project is published');
      })
      .catch((err) => {});

    e.currentTarget.reset();
  };

  return (
    <div className="form-div">
      {keyForm === 'ProjectBrc@70$' ? (
        <>
          <ProjectForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleFile={handleFile}
            imageViewer={imageViewer}
          />
          <RemoveProject />
        </>
      ) : (
        <>
          <label>Enter the key Please</label>

          <input type="text" value={access} onChange={handleAccess} />
          {check && (
            <div
              style={{ fontSize: '2rem', color: 'red', marginTop: '0.5rem' }}
            >
              wrong Key
            </div>
          )}

          <button
            style={{ marginTop: '2rem' }}
            onClick={accessBtn}
            className="btn"
          >
            Access
          </button>
        </>
      )}
    </div>
  );
};
export default SubmitProject;
