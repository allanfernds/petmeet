/* eslint-disable react/prop-types */
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCoins,
  FaUserAlt,
  FaCat,
  FaDog,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

import { formatString } from '../utils';

function PetInfo({ infoTitle, petInfo, icon }) {
  return (
    <div className="flex items-center text-sky-500">
      {icon}
      <strong className="text-sky-500 mx-2">{infoTitle}</strong>
      <p className="text-gray-600 flex-grow">{petInfo}</p>
    </div>
  );
}

function LostPetCard({ pet }) {
  const cardStyle = {
    backgroundImage: `url(${pet.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const getPetIcon = () => {
    if (pet.type === 'Gato') {
      return <FaCat className="text-gray-500 mr-2" />;
    } else if (pet.type === 'Cachorro') {
      return <FaDog className="text-gray-500 mr-2" />;
    }
    return null;
  };

  return (
    <motion.div
      transition={{
        ease: 'linear',
        duration: 2,
        x: { duration: 1 },
      }}
      className="rounded-lg overflow-hidden shadow-md my-5 w-[370px] lg:w-[330px] "
    >
      <div className="w-full">
        <div style={cardStyle} className="h-64"></div>
        <div className="p-4 bg-white">
          <div className="flex items-center">
            {getPetIcon()}
            <h3 className="text-2xl font-bold text-gray-7a00">{pet.name}</h3>
            <strong className="ml-2  font-semibold text-center text-xs text-white p-1 rounded-md bg-sky-500">
              {formatString(pet.breed)}
            </strong>
          </div>
        </div>
        {pet.offerReward && (
          <div className=" font-semibold text-center text-xs text-white p-1  bg-yellow-500">
            <FaCoins className="inline-block mr-1" />
            Ofereço Recompensa
          </div>
        )}
      </div>
      <div className="p-3 bg-white space-y-1">
        <PetInfo
          infoTitle="Tutor"
          petInfo={pet.contact.name}
          icon={<FaUserAlt />}
        />
        <PetInfo
          infoTitle="Último local visto"
          petInfo={pet.location}
          icon={<FaMapMarkerAlt />}
        />
        <PetInfo
          infoTitle="Desapareceu na data"
          petInfo={pet.lastSeenDate.split('-').reverse().join('/')}
          icon={<FaCalendarAlt />}
        />
      </div>
    </motion.div>
  );
}

export default LostPetCard;
