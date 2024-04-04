import NavBar from '../components/NavBar';
import LostPetsList from './LostPetsList';
import { FomrButton } from '../components/Buttons';

function Home() {
  return (
    <div>
      <NavBar />
      <LostPetsList />
      <FomrButton />
    </div>
  );
}

export default Home;
