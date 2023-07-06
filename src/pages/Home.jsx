import Header from '../components/Header';
import { useUserAuth } from '../context/UserAuthContext';
import { Link } from 'react-router-dom';
import LostPetsList from './LostPetsList';

function Home() {
  const { logOut } = useUserAuth();

  return (
    <div>
      <Header />
      <button onClick={logOut}>Sair</button>
      <br />
      <br />
      <Link to="/create-lost-pet">
        <button>Perdi meu pet</button>
      </Link>
      <LostPetsList />
    </div>
  );
}

export default Home;
