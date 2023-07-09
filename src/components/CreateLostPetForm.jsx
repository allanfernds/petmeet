import { useState } from 'react';
import { createLostPet } from '../services/firebase/firestore.functions';
import { useUserAuth } from '../context/UserAuthContext';
import NavBar from './NavBar';

function CreateLostPetForm() {
  const { user } = useUserAuth();

  const [pet, setPet] = useState({
    userId: user.uid,
    name: '',
    type: '',
    breed: '',
    description: '',
    location: '',
    lastSeenDate: '',
    contact: {
      name: '',
      email: '',
      phone: '',
    },
    imageUrl: '',
    offerReward: false,
    found: false,
  });
  const [imageUrl, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes('contact.')) {
      const contactField = name.split('.')[1];
      setPet((prevPet) => ({
        ...prevPet,
        contact: {
          ...prevPet.contact,
          [contactField]: value,
        },
      }));
    } else if (type === 'checkbox') {
      setPet((prevPet) => ({ ...prevPet, [name]: checked }));
    } else {
      setPet((prevPet) => ({ ...prevPet, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createLostPet(pet, imageUrl);
  };

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit}
        className="max-w-xs h-full mx-auto space-y-4 mt-20 mb-20"
      >
        <div className="flex flex-col mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome do seu Pet:
          </label>
          <input
            placeholder="Ex: Melbi"
            type="text"
            name="name"
            value={pet.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Cachorro ou Gato?</label>
          <select
            name="type"
            value={pet.type}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecione um tipo</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Qual raça?</label>
          <input
            placeholder="Ex: Rottweiler"
            type="text"
            name="breed"
            value={pet.breed}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">
            Descreva seu{' '}
            <strong className="font-semibold text-green-500">au</strong>migo ou
            <strong className="font-semibold text-green-500"> miau</strong>migo
          </label>
          <textarea
            placeholder="Descreva caracteristicas do seu pet"
            name="description"
            value={pet.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">
            Onde ele foi visto pela ultima vez?
          </label>
          <input
            placeholder="Ex: Bairro Feira X"
            type="text"
            name="location"
            value={pet.location}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">
            Quando ele foi visto pela ultima vez?
          </label>
          <input
            placeholder="Ex: 01/02/2003"
            type="text"
            name="lastSeenDate"
            value={pet.lastSeenDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Nome do tutor</label>
          <input
            placeholder="Ex: Camila Gonçalves"
            type="text"
            name="contact.name"
            value={pet.contact.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Contact Email:</label>
          <input
            placeholder="Ex: email@mail.com"
            type="email"
            name="contact.email"
            value={pet.contact.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Contact Phone:</label>
          <input
            placeholder="+55 7598892-7560"
            type="text"
            name="contact.phone"
            value={pet.contact.phone}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="offerReward"
              checked={pet.offerReward}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span>Quer oferecer uma recompensa?</span>
          </label>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600"
        >
          Create Lost Pet
        </button>
      </form>
    </>
  );
}

export default CreateLostPetForm;
