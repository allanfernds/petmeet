import { useState } from 'react';
import { BiMenu, BiSearchAlt } from 'react-icons/bi';
import SideBar from './SideBar';
import petfinderLogo from '../assets/petfinder-logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleCloseSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <nav className="bg-white py-4 px-6 fixed top-0 w-full shadow-sm">
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

        <div className="flex items-center">
          <button
            className="text-gray-800 ml-4 focus:outline-none"
            onClick={handleSearchIconClick}
          >
            <BiSearchAlt size="2em" />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="text"
              className="bg-gray-200 rounded-l-full py-2 pr-4 pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search"
            />
            <button className="bg-gray-200 rounded-r-full py-2 px-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#313131"
                onClick={handleSearchIconClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <input
              type="radio"
              id="location"
              name="searchFilter"
              className="ml-1"
            />
            <label htmlFor="location" className="text-gray-800 mr-4">
              Location
            </label>
            <input
              type="radio"
              id="breed"
              name="searchFilter"
              className="ml-1"
            />
            <label htmlFor="breed" className="text-gray-800 mr-4">
              Breed
            </label>
            <input
              type="radio"
              id="date"
              name="searchFilter"
              className="ml-1"
            />
            <label htmlFor="date" className="text-gray-800">
              Date
            </label>
          </div>
        </div>
      )}

      {isSideBarOpen && <SideBar onClose={handleCloseSideBar} />}
    </nav>
  );
}

export default NavBar;
