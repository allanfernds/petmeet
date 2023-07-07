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
    // Cria um objeto para armazenar as propriedades que serão atualizadas
    const updateData = {};

    // Verifica se displayName foi fornecido e adiciona ao objeto updateData
    if (displayName) {
      updateData.displayName = displayName;
    }

    // Verifica se image foi fornecido e faz o upload da imagem
    if (image) {
      const snapshot = await uploadBytes(storageRef, image);
      const photoURL = await getDownloadURL(snapshot.ref);
      updateData.photoURL = photoURL;
    }

    // Verifica se há alguma propriedade para atualizar
    if (Object.keys(updateData).length > 0) {
      // Chama a função updateProfile com o objeto updateData
      await updateProfile(user, updateData);
      console.log('Perfil do usuário atualizado com sucesso.');
    } else {
      console.log('Nada para atualizar.');
    }
  } catch (error) {
    console.error('Ocorreu um erro ao atualizar o perfil do usuário:', error);
  }
};



export { updateUserInfo };
