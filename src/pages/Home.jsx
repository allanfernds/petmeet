import NavBar from '../components/NavBar';

import { Link } from 'react-router-dom';
import LostPetsList from './LostPetsList';

function Home() {
  return (
    <div>
      <NavBar />

      <Link to="/create-lost-pet">
        <button>Perdi meu pet</button>
      </Link>
      <LostPetsList />
    </div>
  );
}

export default Home;
