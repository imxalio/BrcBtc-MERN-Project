import axios from 'axios';
import { useContext, useState } from 'react';
import { ProjcetContext } from './App';

const RemoveProject = () => {
  const { apiUrl } = useContext(ProjcetContext);
  const [projectId, setProjectId] = useState();

  const removeProject = (e) => {
    e.preventDefault();
    axios
      .delete(apiUrl + 'project/' + projectId)
      .then((res) => {
        alert(`${res.data.message}. ID: ${projectId}`);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });

    setProjectId('');
  };

  return (
    <div>
      <h1 style={{ marginBottom: '2.6rem', marginTop: '3.6rem' }}>
        Remove Project :
      </h1>
      <input
        style={{
          padding: '1rem',
          marginRight: '4.4rem',
          marginBottom: '1.6rem',
        }}
        type="text"
        value={projectId}
        placeholder="Project ID"
        onChange={(e) => setProjectId(e.target.value)}
      />
      <button className="btn" onClick={removeProject}>
        Remove
      </button>
    </div>
  );
};
export default RemoveProject;
