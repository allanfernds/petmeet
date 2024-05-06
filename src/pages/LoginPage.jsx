import PhoneSignUp from './PhoneSignUp';
import PetFindLogo from '../assets/PetFind-logo.svg';
import { useUserAuth } from '../context/UserAuthContext';
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const { user } = useUserAuth();
  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={PetFindLogo} alt="PetFind Logo" className="w-24 h-24 mb-4" />
      <h1 className="text-3xl font-bold mb-4">PetMeet</h1>
      <PhoneSignUp />
    </div>
  );
}

export default LoginPage;
