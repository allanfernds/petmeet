import { db } from './firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const lostPetsCollection = collection(db, 'lostPets');

const listAllLostPets = async () => {
  const querySnapshot = await getDocs(lostPetsCollection);
  const docPetsData = querySnapshot.docs.map((doc) => doc.data());

  return docPetsData;
};

const getPetsByLocation = async (location) => {
  const querySnapshot = await getDocs(lostPetsCollection);
  const docPetsData = querySnapshot.docs.map((doc) => doc.data());

  // Filter by location
  const filteredPets = docPetsData.filter((pet) => {
    const petLocation = pet.location.toLowerCase();
    const filterLocation = location.toLowerCase();
    return petLocation.includes(filterLocation);
  });

  return filteredPets;
};

const getPetsByBreed = async (breed) => {
  const querySnapshot = await getDocs(lostPetsCollection);
  const docPetsData = querySnapshot.docs.map((doc) => doc.data());

  // Filter by breed
  const filteredPets = docPetsData.filter((pet) => {
    const petBreed = pet.breed.toLowerCase();
    const filterBreed = breed.toLowerCase();
    return petBreed.includes(filterBreed);
  });

  return filteredPets;
};

const getPetsByType = async (type) => {
  const querySnapshot = await getDocs(lostPetsCollection);
  const docPetsData = querySnapshot.docs.map((doc) => doc.data());

  // Filter by type
  const filteredPets = docPetsData.filter((pet) => {
    return pet.type.toLowerCase() === type.toLowerCase();
  });

  console.log(filteredPets);
  return filteredPets;
};

// const novoPetPerdido = {
//   name: 'Bella',
//   type: 'dog',
//   breed: 'Labrador Retriever',
//   description: 'Bella is a playful and friendly dog with a black coat.',
//   location: 'Central Park',
//   lastSeenDate: '2023-06-29',
//   contact: {
//     name: 'Jane Doe',
//     email: 'janedoe@example.com',
//     phone: '987-654-3210',
//   },
// };

const createLostPet = async (pet) => {
  await addDoc(lostPetsCollection, {
    ...pet,
  });
};

export {
  listAllLostPets,
  getPetsByLocation,
  getPetsByType,
  getPetsByBreed,
  createLostPet,
};
