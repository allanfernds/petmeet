/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FaPaw, FaUser, FaHome, FaPlus, FaQuestion } from 'react-icons/fa';
const links = [
  { name: 'Home', href: '/home', icon: <FaHome /> },
  { name: 'Meu Perfil', href: '/profile', icon: <FaUser /> },
  {
    name: 'Divulgar um Pet',
    href: '/create-lost-pet',
    icon: <FaPlus />,
  },
  { name: 'Meus Pets', href: '/user-pets-list', icon: <FaPaw /> },
  { name: 'Sobre o PetFinder', href: '/aboutus', icon: <FaQuestion /> },
];

export function NavLinks({ onClose }) {
  const { pathname } = useLocation();

  return (
    <>
      {links.map((link) => {
        return (
          <motion.div
            transition={{
              ease: 'linear',
              duration: 2,
              x: { duration: 1 },
            }}
            key={link.href + link.length}
          >
            <Link
              to={link.href}
              className={clsx(
                'transition-all ease-in flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-100 p-3 text-md font-medium hover:bg-sky-100 hover:text-sky-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-200 text-sky-700': pathname === link.href,
                }
              )}
              onClick={onClose}
            >
              <span>{link.icon}</span>
              <p>{link.name}</p>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
}
