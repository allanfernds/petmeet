/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function SideBar({ onClose }) {
  const { logOut } = useUserAuth();
  const sideBarRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        onClose && onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    logOut();
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div
        className="fixed right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out"
        ref={sideBarRef}
      >
        <div className="flex justify-between items-center py-4 px-6">
          <h3 className="text-xl font-bold">Menu</h3>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => onClose && onClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="py-2 px-6">
          <li className="py-2">
            <Link
              to="/profile"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => onClose && onClose()}
            >
              Perfil
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/user-pets-list"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => onClose && onClose()}
            >
              Meus Pets
            </Link>
          </li>
        </ul>
        <div className="px-6 pb-4">
          <button
            className="text-red-500 hover:text-red-600"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
        {showConfirmation && (
          <div className="px-6 py-2">
            <p>Deseja realmente sair?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 mr-2 rounded"
                onClick={handleConfirmLogout}
              >
                Sim
              </button>
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
                onClick={handleCancelLogout}
              >
                Não
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
