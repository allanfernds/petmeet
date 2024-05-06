import { useState, useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import SideBar from './SideBar';
import PetFindLogo from '../assets/PetFind-logo.svg';
import { Link } from 'react-router-dom';
import PetsContext from '../context/PetsContext';
import { useLocation } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { FaHome } from 'react-icons/fa';

function NavBar() {
  const { searchTerm, setSearchTerm } = useContext(PetsContext);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const { user } = useUserAuth();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const location = useLocation();

  if (!user) {
    return null;
  }

  return (
    <nav className="bg-zinc-50 py-4 px-6 fixed top-0 w-full shadow border rounded-b-lg">
      <div className="flex flex-col justify-center items-center">
        <div className="px-2 flex flex-row-reverse w-96 items-center justify-between ">
          <button
            className=" text-gray-800  focus:outline-none"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          >
            <BiMenu size="2em" />
          </button>
          <Link to="/home">
            <div className="flex items-center justify-center">
              <img src={PetFindLogo} alt="PetFind Logo" className="h-6 w-6" />
              <h1 className="text-gray-800 font-semibold text-2xl">PetMeet</h1>
            </div>
          </Link>
          {location.pathname !== '/home' ? (
            <Link to="/home">
              <FaHome size="1.5em" />
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className="flex justify-center">
          {location.pathname === '/home' ? (
            <input
              type="text"
              placeholder="Pesquise por Bairro ou Raça"
              className="mt-2 border border-gray-300 w-[370px]  rounded-md p-2"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          ) : (
            ''
          )}
        </div>
      </div>

      {isSideBarOpen && <SideBar onClose={() => setIsSideBarOpen(false)} />}
    </nav>
  );
}

export default NavBar;
