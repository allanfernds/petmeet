/* eslint-disable react/prop-types */
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillAlt,
  FaUserAlt,
  FaCat,
  FaDog,
} from 'react-icons/fa';

import { formatString } from '../utils';

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
    <div className="rounded-lg overflow-hidden shadow-md my-5 w-[370px] lg:w-[70%]">
      {pet.offerReward && (
        <div className="bg-yellow-300 text-yellow-800 text-center px-2 py-1">
          <FaMoneyBillAlt className="inline-block mr-1" />
          Ofereço recompensa
        </div>
      )}
      <div className="w-full">
        <div style={cardStyle} className="h-64"></div>
        <div className="p-4 bg-white">
          <div className="flex items-center">
            {getPetIcon()}
            <h3 className="text-2xl font-bold text-gray-7a00">{pet.name}</h3>
            <strong className="ml-2  font-semibold text-center text-xs text-white p-1 rounded-md bg-green-500">
              {formatString(pet.breed)}
            </strong>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white space-y-1">
        <div className="flex items-center">
          <FaUserAlt className="text-green-500 mr-2" />
          <strong className="text-green-500 mr-2">Tutor</strong>
          <p className="text-gray-600 flex-grow">{pet.contact.name}</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-green-500 mr-2" />
          <strong className="text-green-500 mr-2">Último local visto</strong>
          <p className="text-gray-600 flex-grow">
            {formatString(pet.location)}
          </p>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="text-green-500 mr-2" />
          <strong className="text-green-500 mr-2">Data em que sumiu</strong>
          <p className="text-gray-600 flex-grow">{pet.lastSeenDate}</p>
        </div>
      </div>
    </div>
  );
}

export default LostPetCard;
