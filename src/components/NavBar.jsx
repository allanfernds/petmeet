import { useState, useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import SideBar from './SideBar';
import petfinderLogo from '../assets/petfinder-logo.svg';
import { Link } from 'react-router-dom';
import PetsContext from '../context/PetsContext';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const { searchTerm, setSearchTerm } = useContext(PetsContext);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const location = useLocation();
  console.log(location);

  return (
    <nav className="bg-white py-4 px-6  fixed top-0 w-full shadow-lg border">
      <div className="flex flex-col justify-center items-center">
        <div className="px-2 flex flex-row-reverse w-96 justify-center">
          <button
            className=" text-gray-800  focus:outline-none relative left-24"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          >
            <BiMenu size="2em" />
          </button>
          <Link to="/home">
            <div className="flex items-center justify-center">
              <img
                src={petfinderLogo}
                alt="Petfinder Logo"
                className="h-6 w-6"
              />
              <h1 className="text-gray-800 font-semibold text-2xl">
                PetFinder
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          {location.pathname === '/home' ? (
            <input
              type="text"
              placeholder="Pesquisar"
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
