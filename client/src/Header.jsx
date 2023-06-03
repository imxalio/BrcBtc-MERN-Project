import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <Logo />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '3.6rem',
            marginBottom: '3.6rem',
            color: '#32200a',
          }}
        >
          <h1 style={{ marginBottom: '1rem' }}>Upcoming</h1>
          <h3>Ordinal Projects</h3>
        </div>
      </Link>
    </>
  );
};
export default Header;
