import { useUserAuth } from '../context/UserAuthContext';
import { Link } from 'react-router-dom';

function Home() {
  const { logOut } = useUserAuth();

  return (
    <div>
      Home
      <button onClick={logOut}>Sair</button>
      <br />
      <br />
      <Link to="/create-lost-pet">
        <button>Perdi meu pet</button>
      </Link>
    </div>
  );
}

export default Home;
