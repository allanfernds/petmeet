import { useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { useUserAuth } from '../context/UserAuthContext';
import { getPetsByuserUid } from '../services/firebase/firestore.functions';

function UserPetsList() {
  const { user } = useUserAuth();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchUserPets = async () => {
      try {
        if (user && user.uid) {
          const userPets = await getPetsByuserUid(user.uid);
          setPets(userPets);
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

  return (
    <div>
      <h2>My Pets</h2>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>Type: {pet.type}</p>
          <p>Breed: {pet.breed}</p>
          <p>Location: {pet.location}</p>
          <p>Last Seen Date: {pet.lastSeenDate}</p>
          {!pet.found && (
            <button onClick={() => handleMarkAsFound(pet.id)}>
              Mark as Found
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserPetsList;
