import ProtectedRoute from '../components/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UpdateUserInfo from '../pages/UpdateUserInfo';
import CreateLostPetForm from '../components/CreateLostPetForm';
import ProfileInfo from '../pages/ProfileInfos';
import UserPetsList from '../pages/UserPetsList';
import LoginPage from '../pages/LoginPage';
import ProfileCheck from '../components/ProfileCheck';
import PhoneSignUp from '../pages/PhoneSignUp';
import LostPetDetailsPage from '../pages/LostPetDetailsPage';
import AboutUs from '../pages/AboutUs';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<LoginPage />} />
      <Route path="/profilecheck" element={<ProfileCheck />} />
      <Route
        path="/update-user-info"
        element={
          <ProtectedRoute>
            <UpdateUserInfo />
          </ProtectedRoute>
        }
      />
      <Route path="/phonesignup" element={<PhoneSignUp />} />
      <Route
        path="/create-lost-pet"
        element={
          <ProtectedRoute>
            <CreateLostPetForm />
          </ProtectedRoute>
        }
      />
      <Route path="/lost-pets/:petId" element={<LostPetDetailsPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileInfo />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-pets-list"
        element={
          <ProtectedRoute>
            <UserPetsList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/aboutus"
        element={
          <ProtectedRoute>
            <AboutUs />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
