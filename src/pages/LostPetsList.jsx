import { useEffect, useState } from 'react';
import LostPetCard from '../components/PetCard';
import { listAllLostPets } from '../services/firebase/firestore.functions';

function LostPetsList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchLostPets() {
      const lostPets = await listAllLostPets();
      setPets(lostPets);
    }

    fetchLostPets();
  }, []);

  return (
    <div>
      <h2>Lost Pets</h2>
      {pets.map((pet, index) => (
        <LostPetCard key={index} pet={pet} />
      ))}
    </div>
  );
}

export default LostPetsList;
