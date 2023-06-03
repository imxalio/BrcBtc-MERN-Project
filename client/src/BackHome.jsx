import { Link } from 'react-router-dom';
const BackHome = () => {
  return (
    <Link to="/">
      <div
        style={{
          marginBottom: '3.6rem',
          textAlign: 'end',
        }}
      >
        <button className="btn">Back to Home</button>
      </div>
    </Link>
  );
};
export default BackHome;
