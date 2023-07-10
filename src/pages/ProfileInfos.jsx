import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import NavBar from '../components/NavBar';
import { FaPaw, FaEdit } from 'react-icons/fa';

function ProfileInfo() {
  const { user } = useUserAuth();

  return (
    <div>
      <NavBar />

      <div className="max-w-md mx-auto bg-white p-8">
        <h3 className="text-2xl font-bold mb-4">Profile Information</h3>
        <div className="mt-4 rounded-full">
          <img src={user.photoURL} alt="Profile" />
        </div>
        <p className="text-center text-2xl mt-4 font-sans">
          {user.displayName}
        </p>
        <p className="text-center text-gray-500">{user.phoneNumber}</p>
        <div className="flex justify-between mt-8">
          <Link to="/user-pets-list">
            <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded">
              <FaPaw className="mr-2" /> Meus Pets
            </button>
          </Link>
          <Link to="/update-user-info">
            <button className="flex items-center bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400">
              <FaEdit className="mr-2" /> Editar Perfil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
