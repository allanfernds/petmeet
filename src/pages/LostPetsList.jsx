import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LostPetCard from '../components/PetCard';
import { listAllLostPets } from '../services/firebase/firestore.functions';

function LostPetsList() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLostPets() {
      const lostPets = await listAllLostPets();
      setPets(lostPets);
      setLoading(false);
    }

    fetchLostPets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Lost Pets</h2>
      {pets.map((pet, index) => (
        <Link key={index} to={`/lost-pets/${pet.id}`}>
          <LostPetCard pet={pet} />
        </Link>
      ))}
    </div>
  );
}

export default LostPetsList;
