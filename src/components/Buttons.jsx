/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import { BiAddToQueue, BiExit } from 'react-icons/bi';

import { useUserAuth } from '../context/UserAuthContext';
import { useState } from 'react';

export function FomrButton() {
  return (
    <div className="fixed bottom-4 right-4 overflow-hidden">
      <Link to="/create-lost-pet">
        <button className="bg-green-500 text-white rounded-full p-4 shadow-lg">
          <BiAddToQueue size={24} />
        </button>
      </Link>
    </div>
  );
}

export function LogOutButton() {
  const { logOut } = useUserAuth();
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    <>
      <div className="px-2">
        <button
          className="flex  w-full h-[48px] grow items-center justify-center gap-2 rounded-md bg-red-100 p-3 text-md font-medium 
          hover:bg-red-200 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3 text-black"
          onClick={handleLogout}
        >
          <BiExit size="1.5em" />
          Sair
        </button>
      </div>
      {showConfirmation && (
        <div className="px-2 py-2">
          <p className="text-center text-red-500 rounded-m">
            Deseja realmente sair?
          </p>
          <div className="flex  mt-4">
            <button
              className="bg-red-500 text-white py-2 px-4 w-2/4 mr-2 rounded"
              onClick={handleConfirmLogout}
            >
              Sim
            </button>
            <button
              className="bg-gray-300 text-gray-800 py-2 w-2/4 px-4 rounded"
              onClick={handleCancelLogout}
            >
              Não
            </button>
          </div>
        </div>
      )}
    </>
  );
}
