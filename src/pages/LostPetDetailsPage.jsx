import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

function Header() {
  return (
    <div>
      <h2>Detalhes do Pet</h2>
      <Link to="/home">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

function LostPetDetailsPage() {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const petDoc = doc(db, 'lostPets', petId);
        const petSnapshot = await getDoc(petDoc);

        if (petSnapshot.exists()) {
          const petData = petSnapshot.data();
          setPet(petData);
        } else {
          console.log('Pet not found');
        }
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [petId]);

  return (
    <div>
      <Header />
      {pet && (
        <>
          <h1>{pet.name}</h1>
          <p>Type: {pet.type}</p>
          <p>Breed: {pet.breed}</p>
          <p>Description: {pet.description}</p>
          <p>Location: {pet.location}</p>
          <p>Last Seen Date: {pet.lastSeenDate}</p>
          <p>Contact Name: {pet.contact.name}</p>
          <p>Contact Email: {pet.contact.email}</p>
          <p>Contact Phone: {pet.contact.phone}</p>
          <p>
            Image: <img src={pet.imageUrl} alt="Pet" />
          </p>
          <p>Offer Reward: {pet.offerReward ? 'Yes' : 'No'}</p>
          <p>Found: {pet.found ? 'Yes' : 'No'}</p>
        </>
      )}
    </div>
  );
}

export default LostPetDetailsPage;
