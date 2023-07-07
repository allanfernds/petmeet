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
        <strong>Photo:</strong> <img src={user.photoUrl} alt="Profile" />
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </p>
    </div>
  );
}

export default ProfileInfo;
