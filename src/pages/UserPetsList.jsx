import { useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { useUserAuth } from '../context/UserAuthContext';
import { getPetsByuserUid } from '../services/firebase/firestore.functions';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import UserLostPetsCard from '../components/UserLostPetsCard';

function UserPetsList() {
  const { user } = useUserAuth();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPets = async () => {
      try {
        if (user && user.uid) {
          const userPets = await getPetsByuserUid(user.uid);
          setPets(userPets);
          setLoading(false); // Define o loading como falso quando os pets são obtidos
        }
      } catch (error) {
        console.error('Error fetching my pets:', error);
      }
    };

    fetchUserPets();
  }, [user]);

  const handleMarkAsFound = async (petId) => {
    const petRef = doc(db, 'lostPets', petId);
    const confirmation = window.confirm('Are you sure the pet has been found?');

    if (confirmation) {
      try {
        await updateDoc(petRef, { found: true });
        console.log('Pet marked as found!');
      } catch (error) {
        console.error('Error marking pet as found:', error);
      }
    }
  };

  if (loading) {
    return <Loading />; // Renderiza uma mensagem de carregamento enquanto os pets estão sendo obtidos
  }

  return (
    <div>
      <NavBar />
      <h2>My Pets</h2>
      {pets.map((pet) => (
        <UserLostPetsCard
          key={pet.id}
          pet={pet}
          handleMarkAsFound={handleMarkAsFound}
        />
      ))}
    </div>
  );
}

export default UserPetsList;
