import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import {
  FaCoins,
  FaUser,
  FaPhone,
  FaWhatsapp,
  FaCat,
  FaDog,
  FaMapPin,
  FaCalendar,
  FaPaw,
} from 'react-icons/fa';
import Loading from '../components/Loading';

function LostPetDetailsPage() {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const petDoc = doc(db, 'lostPets', petId);
        const petSnapshot = await getDoc(petDoc);

        if (petSnapshot.exists()) {
          const petData = petSnapshot.data();
          setPet(petData);
        } else {
          console.log('Pet not found');
        }
      } catch (error) {
        console.error('Error fetching pet details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [petId]);

  const handleWhatsappClick = () => {
    const whatsappLink = `https://wa.me/${pet.contact.phone}`;
    window.open(whatsappLink, '_blank');
  };

  const handleCallClick = () => {
    const phoneLink = `tel:${pet.contact.phone}`;
    window.location.href = phoneLink;
  };

  return (
    <div className="pt-16">
      {loading ? (
        <Loading />
      ) : (
        pet && (
          <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden">
            <div>
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="w-full h-auto"
              />
              <div className="top-0 left-0">
                <h3 className="text-xl flex items-center font-semibold text-white bg-sky-500 bg-opacity-80 p-2">
                  {pet.type === 'Gato' ? (
                    <FaCat className="inline-block mr-2 text-white" />
                  ) : pet.type === 'Cachorro' ? (
                    <FaDog className="inline-block mr-2 text-white" />
                  ) : null}
                  {pet.name}
                </h3>
              </div>
            </div>

            {pet.offerReward && (
              <div className="bg-yellow-300 text-amber-700 text-center px-2 py-1  border-sky-500">
                <FaCoins className="inline-block mr-1" />
                Oferece recompensa
              </div>
            )}

            <div className="p-4 whitespace-nowrap">
              <div className="flex items-center mb-4">
                <FaPaw className="text-gray-500 mr-2" />
                <strong className="text-gray-500 mr-2">Pet: </strong>
                <p className="text-gray-600 mr-4">{pet.name}</p>
                <strong className="text-gray-500 mr-2">Raça: </strong>
                <p className="text-gray-600">{pet.breed}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaUser className="text-gray-500 mr-2" />
                <strong className="text-gray-500 mr-2">Tutor</strong>
                <p className="text-gray-600">{pet.contact.name}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-gray-500 mr-2" />
                <strong className="text-gray-500 mr-2">Telefone</strong>
                <p className="text-gray-600">{pet.contact.phone}</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center text-white font-semibold  mb-4 bg-sky-400 py-3 px-4 rounded-md hover:bg-sky-500 hover:text-white">
                  <FaWhatsapp className="mr-2" size="1.5em" />
                  <button
                    className="focus:outline-none "
                    onClick={handleWhatsappClick}
                  >
                    Conversar no WhatsApp
                  </button>
                </div>
                <div className="flex items-center text-white font-semibold mb-4 bg-blue-400 py-3 px-4 rounded-md hover:bg-blue-500 hover:text-white">
                  <FaPhone className=" mr-2" size="1.3em" />
                  <button
                    className="focus:outline-none"
                    onClick={handleCallClick}
                  >
                    Ligar
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaMapPin className="text-gray-600 mr-2" />
                <p className="text-gray-600">
                  <strong>Último bairro visto: </strong>
                  {pet.location}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaCalendar className="text-gray-600 mr-2" />
                <p className="text-gray-600">
                  <strong>Última data visto: </strong>
                  {pet.lastSeenDate.split('-').reverse().join('/')}
                </p>
              </div>
              <div className="flex items-center mb-4 whitespace-normal bg-sky-100 p-2 rounded-lg">
                <p className="text-gray-600">
                  <strong>Descrição: </strong>
                  {pet.description}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default LostPetDetailsPage;
