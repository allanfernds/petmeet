import { useState } from 'react';
import { createLostPet } from '../services/firebase/firestore.functions';

function CreateLostPetForm() {
  const [pet, setPet] = useState({
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
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({ ...prevPet, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createLostPet(pet, image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={pet.name}
          onChange={handleInputChange}
        />
      </label>
      {/* Criar os campos que faltam */}
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <button type="submit">Create Lost Pet</button>
    </form>
  );
}

export default CreateLostPetForm;
