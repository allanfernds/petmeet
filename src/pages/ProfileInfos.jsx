import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function ProfileInfo() {
  const { user } = useUserAuth();

  return (
    <div>
      <h3>Profile Information</h3>
      <p>
        <strong>Name:</strong> {user.displayName}
      </p>
      <p>
        <strong>Photo:</strong> <img src={user.photoURL} alt="Profile" />
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </p>
      <Link to="/user-pets-list">
        <button>Meus Pets</button>
      </Link>
      <hr />
      <br />
      <Link to="/update-user-info">
        <button>Editar Perfil</button>
      </Link>
    </div>
  );
}

export default ProfileInfo;
