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
    <div className="flex flex-col items-center mx-2 h-screen">
      <h2 className="text-2xl font-bold mb-4">Lost Pets</h2>
      <div className="overflow-y-auto">
        {pets.map((pet, index) => (
          <Link key={index} to={`/lost-pets/${pet.id}`}>
            <LostPetCard pet={pet} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LostPetsList;
