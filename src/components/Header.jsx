import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <p>Logo</p>
      <h1>PetFinder</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Header;
