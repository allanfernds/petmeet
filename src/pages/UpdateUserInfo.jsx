import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { updateUserInfo } from '../services/firebase/firebase.user.functions';

const UpdateUserInfo = () => {
  const [displayName, setDisplayName] = useState('');
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    updateUserInfo(user, displayName, image)
      .then(() => {
        navigate('/home');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <h2>Update User Information</h2>
      <form onSubmit={handleUpdateInfo}>
        <div>
          <label htmlFor="displayName">Username:</label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateUserInfo;
