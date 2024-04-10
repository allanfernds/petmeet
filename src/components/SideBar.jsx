/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

import { BiX } from 'react-icons/bi';
import { NavLinks } from './NavLinks';
import { LogOutButton } from './Buttons';
import { motion } from 'framer-motion';

function SideBar({ onClose }) {
  const sideBarRef = useRef(null);

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

  return (
    <motion.div
      animate={{ x: [-30, 0] }}
      className="fixed inset-0 flex justify-end z-50 transition-all ease-linear "
    >
      <div
        className="fixed right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out"
        ref={sideBarRef}
      >
        <div className="flex justify-between items-center py-4 px-6 bg-sky-500 text-white">
          <h3 className="text-2xl font-bold">Menu</h3>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => onClose && onClose()}
          >
            <BiX size="2em" color="white" />
          </button>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <NavLinks onClose={() => onClose && onClose()} />
        </div>
        <LogOutButton />
      </div>
    </motion.div>
  );
}

export default SideBar;
