import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LostPetCard from '../components/PetCard';
import { listAllLostPets } from '../services/firebase/firestore.functions';
import Loading from '../components/Loading';
import PetsContext from '../context/PetsContext';

function LostPetsList() {
  const { lostPets, setLostPets } = useContext(PetsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostPets = async () => {
      try {
        const pets = await listAllLostPets();
        setLostPets(pets);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchLostPets();
  }, [setLostPets]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col items-center mx-2 h-screen">
        <div className="overflow-y-auto mt-12">
          {lostPets.map((pet) => (
            <Link key={pet.id} to={`/lost-pets/${pet.id}`}>
              <LostPetCard pet={pet} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default LostPetsList;
