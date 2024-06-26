import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LostPetCard from '../components/PetCard';
import { listAllLostPets } from '../services/firebase/firestore.functions';
import Loading from '../components/Loading';
import PetsContext from '../context/PetsContext';

function LostPetsList() {
  const { lostPets, setLostPets, searchTerm } = useContext(PetsContext);
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

  const searchTermLowerCase = searchTerm.toLowerCase(); // Convertendo o searchTerm para minúsculas

  const filteredPets =
    searchTermLowerCase.length > 0
      ? lostPets.filter(
          (pet) =>
            pet.location.toLowerCase().includes(searchTermLowerCase) || // Verificando se a localização inclui o termo de pesquisa
            pet.breed.toLowerCase().includes(searchTermLowerCase) // Verificando se a raça inclui o termo de pesquisa
        )
      : [];

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-start pt-16 h-full bg-neutral-100">
        <div className="overflow-y-auto mt-12">
          {searchTermLowerCase.length > 0
            ? filteredPets.map((pet) => (
                <Link key={pet.id} to={`/lost-pets/${pet.id}`}>
                  <LostPetCard pet={pet} />
                </Link>
              ))
            : lostPets.map((pet) => (
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
