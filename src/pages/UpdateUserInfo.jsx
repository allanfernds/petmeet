import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { updateUserInfo } from '../services/firebase/firebase.user.functions';
import NavBar from '../components/NavBar';

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

    if (displayName.length === 0) {
      return;
    }

    if (displayName.split(' ').length !== 2) {
      alert('O nome deve conter nome e sobrenome.');
      return;
    }

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
      <NavBar />
      <div className="mt-16 max-w-md mx-auto p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Atualizar seus dados</h2>
        <form onSubmit={handleUpdateInfo}>
          <div className="mb-4">
            <label
              htmlFor="displayName"
              className="block mb-2 text-lg font-medium"
            >
              Nome completo:
            </label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2 text-lg font-medium">
              Foto e perfil:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image"
              className="mb-2"
            />
            {image && (
              <div>
                <h3 className="text-lg font-medium mb-2">Image Preview:</h3>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-full rounded"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateUserInfo;
