import { useState } from 'react';
import { createLostPet } from '../services/firebase/firestore.functions';
import { useUserAuth } from '../context/UserAuthContext';

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
    console.log(user);
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
      <label>
        Type:
        <select name="type" value={pet.type} onChange={handleInputChange}>
          <option value="">Selecione um tipo</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={pet.breed}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={pet.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={pet.location}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Seen Date:
        <input
          type="text"
          name="lastSeenDate"
          value={pet.lastSeenDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contact Name:
        <input
          type="text"
          name="contact.name"
          value={pet.contact.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contact Email:
        <input
          type="email"
          name="contact.email"
          value={pet.contact.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contact Phone:
        <input
          type="text"
          name="contact.phone"
          value={pet.contact.phone}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Offer Reward:
        <input
          type="checkbox"
          name="offerReward"
          checked={pet.offerReward}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <button type="submit">Create Lost Pet</button>
    </form>
  );
}

export default CreateLostPetForm;
