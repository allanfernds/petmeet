import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { generateUniqueUserFileName } from '../../utils';
import { updateProfile } from 'firebase/auth';
const storage = getStorage();

const updateUserInfo = async (user, displayName, image) => {
  const storageRef = ref(
    storage,
    `users-profile-images/${generateUniqueUserFileName(displayName)}.png`
  );

  try {
    // Faz o upload da imagem para o Firebase Storage
    const snapshot = await uploadBytes(storageRef, image);

    // Obtém a URL da imagem no Firebase Storage
    const photoURL = await getDownloadURL(snapshot.ref);

    // Adiciona a URL da imagem ao objeto pet
    updateProfile(user, {
      displayName,
      photoURL,
    });

    console.log('Perfil do usuário atualizado com sucesso.');
  } catch (error) {
    console.error('Ocorreu um erro ao atualizar o perfil do usuário:', error);
  }
};

export { updateUserInfo };
