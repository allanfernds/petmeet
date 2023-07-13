import PhoneSignUp from './PhoneSignUp';
import petfinderLogo from '../assets/petfinder-logo.svg';

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={petfinderLogo}
        alt="PetFinder Logo"
        className="w-24 h-24 mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">PetFinder</h1>
      <PhoneSignUp />
    </div>
  );
}

export default LoginPage;
