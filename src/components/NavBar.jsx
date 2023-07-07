import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <p>Logo</p>
      <h1>PetFinder</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/profile">
        <button>Perfil</button>
      </Link>
    </div>
  );
}

export default NavBar;
