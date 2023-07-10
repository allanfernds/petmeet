import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import SideBar from './SideBar';
import petfinderLogo from '../assets/petfinder-logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleCloseSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <nav className="bg-white py-4 px-6 fixed top-0 w-full shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="text-gray-800 mr-4 focus:outline-none"
            onClick={handleSideBarToggle}
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
      </div>

      {isSideBarOpen && <SideBar onClose={handleCloseSideBar} />}
    </nav>
  );
}

export default NavBar;
