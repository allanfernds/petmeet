/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import { FaPaw, FaUser, FaHome } from 'react-icons/fa';
const links = [
  { name: 'Home', href: '/home', icon: <FaHome /> },
  { name: 'Meu Perfil', href: '/profile', icon: <FaUser /> },
  { name: 'Meus Pets', href: '/user-pets-list', icon: <FaPaw /> },
];

export function NavLinks({ onClose }) {
  const { pathname } = useLocation();

  return (
    <>
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            to={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-100 p-3 text-md font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-100 text-green-600': pathname === link.href,
              }
            )}
            onClick={onClose}
          >
            <span>{link.icon}</span>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
