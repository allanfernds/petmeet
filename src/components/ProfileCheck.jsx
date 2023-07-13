import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProfileCheck = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está autenticado e possui nome de usuário e imagem de perfil
    if (user && user.displayName && user.photoURL) {
      console.log(user.displayName, user.photoURL);
      navigate('/'); // Redireciona para a página inicial
    } else {
      navigate('/update-user-info'); // Redireciona para o componente de atualização de informações
    }
  }, [user, navigate]);

  return null;
};

export default ProfileCheck;
