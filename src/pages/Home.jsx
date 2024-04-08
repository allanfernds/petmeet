import NavBar from '../components/NavBar';
import LostPetsList from './LostPetsList';
import { FomrButton } from '../components/Buttons';

function Home() {
  return (
    <>
      <NavBar />
      <LostPetsList />
      <FomrButton />
    </>
  );
}

export default Home;
