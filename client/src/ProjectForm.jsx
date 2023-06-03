import { Link } from 'react-router-dom';
import BackHome from './BackHome';
const ProjectForm = ({
  handleChange,
  handleSubmit,
  handleFile,
  imageViewer,
}) => {
  return (
    <div>
      <BackHome />
      <form onSubmit={handleSubmit} className="from-container">
        <div className="form-div">
          <label htmlFor="name">Project Name</label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-div">
          <label htmlFor="description">Project Description</label>
          <textarea
            name="description"
            id="description"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-div">
          <label htmlFor="twitter">Project Twitter</label>
          <input
            name="twitter"
            id="twitter"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-div">
          <label htmlFor="discord">Project Discord</label>
          <input
            name="discord"
            id="discord"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-div">
          <label htmlFor="date">Project Date</label>
          <input
            style={{ textTransform: 'uppercase' }}
            name="date"
            id="date"
            type="date"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-div">
          <label htmlFor="image">Project Image</label>
          <input
            name="image"
            id="image"
            type="file"
            onChange={handleFile}
            required
          />
          {imageViewer && (
            <img
              style={{ height: '35rem', objectFit: 'cover' }}
              src={imageViewer}
            ></img>
          )}
        </div>
        <button className="btn submit-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
export default ProjectForm;
