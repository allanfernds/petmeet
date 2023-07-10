import { db } from './firebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { formatString, generateUniquePetFileName } from '../../utils';


console.log()

// const lostPetsCollection = collection(db, 'lostPets');

const listAllLostPets = async () => {
  const querySnapshot = await getDocs(
    query(
      collection(db, 'lostPets'),
      where('found', '==', false),
      orderBy('lastSeenDate', 'desc')
    )
  );

  const docPetsData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(docPetsData);
  return docPetsData;
};

const getPetsByuserUid = async (userUid) => {
    try {
      const petsRef = collection(db, 'lostPets');
      const q = query(petsRef, where('userId', '==', userUid));

      const querySnapshot = await getDocs(q);
      const userPets = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      return userPets
    } catch (error) {
      console.log(error.message)
    }
}

const getPetsByLocation = async (location) => {
  const q = query(collection(db, 'lostPets'), where('location', '==', location));
  const querySnapshot = await getDocs(q);
  const docPetsData = querySnapshot.docs.map((doc) => doc.data());
  console.log(docPetsData)
  return docPetsData;
};

const getPetsByBreed = async (breed) => {
  const q = query(collection(db, 'lostPets'), where('breed', '==', breed));
  const querySnapshot = await getDocs(q);
  const docPetsData = querySnapshot.docs.map((doc) => doc.data());
  return docPetsData;
};

const getPetsByType = async (type) => {
  const q = query(collection(db, 'lostPets'), where('type', '==', type));
  const querySnapshot = await getDocs(q);
  const docPetsData = querySnapshot.docs.map((doc) => doc.data());
  return docPetsData;
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
    pet.contact.name = formatString(pet.contact.name)
    const petWithImage = { ...pet, imageUrl, };

    // Adiciona os dados do pet ao Firestore
    await addDoc(collection(db, 'lostPets'), petWithImage);

    console.log('Pet perdido criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar pet perdido:', error);
  }
};



export {
  listAllLostPets,
  getPetsByuserUid,
  getPetsByLocation,
  getPetsByType,
  getPetsByBreed,
  createLostPet,
};
