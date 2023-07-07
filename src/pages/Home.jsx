import NavBar from '../components/NavBar';
import { useUserAuth } from '../context/UserAuthContext';
import { Link } from 'react-router-dom';
import LostPetsList from './LostPetsList';

function Home() {
  const { logOut } = useUserAuth();

  return (
    <div>
      <NavBar />
      <button onClick={logOut}>Sair</button>
      <hr />
      <Link to="/create-lost-pet">
        <button>Perdi meu pet</button>
      </Link>
      <LostPetsList />
    </div>
  );
}

export default Home;
