import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { BiAddToQueue } from 'react-icons/bi';
import LostPetsList from './LostPetsList';

function Home() {
  return (
    <div>
      <NavBar />
      <div className="fixed bottom-4 right-4 overflow-hidden">
        <Link to="/create-lost-pet">
          <button className="bg-green-500 text-white rounded-full p-4 shadow-lg">
            <BiAddToQueue size={24} />
          </button>
        </Link>
      </div>

      <LostPetsList />
    </div>
  );
}

export default Home;
