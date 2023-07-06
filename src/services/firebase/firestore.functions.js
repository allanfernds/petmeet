import { db } from './firebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { generateUniquePetFileName } from '../../utils';

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

const createLostPet = async (pet, image) => {
  const storage = getStorage();
  const storageRef = ref(storage, `lost-pets/${generateUniquePetFileName(pet)}.png`);

  try {
    // Faz o upload da imagem para o Firebase Storage
    const snapshot = await uploadBytes(storageRef, image);

    // Obtém a URL da imagem no Firebase Storage
    const imageUrl = await getDownloadURL(snapshot.ref);

    // Adiciona a URL da imagem ao objeto pet
    const petWithImage = { ...pet, imageUrl };

    // Adiciona os dados do pet ao Firestore
    await addDoc(collection(db, 'lostPets'), petWithImage);

    console.log('Pet perdido criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar pet perdido:', error);
  }
};



export {
  listAllLostPets,
  getPetsByLocation,
  getPetsByType,
  getPetsByBreed,
  createLostPet,
};
