import { Route, Routes } from 'react-router-dom';
import PhoneSignUp from './pages/PhoneSignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProfileCheck from './components/ProfileCheck';
import UpdateUserInfo from './pages/UpdateUserInfo';
import CreateLostPetForm from './components/CreateLostPetForm';
import LostPetDetailsPage from './pages/LostPetDetailsPage';
import ProfileInfo from './pages/ProfileInfos';
import UserPetsList from './pages/UserPetsList';
import NavBar from './components/NavBar';

function App() {
  return (
    <main className="bg-slate-100">
      <UserAuthContextProvider>
        <NavBar />
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
        </Routes>
      </UserAuthContextProvider>
    </main>
  );
}

export default App;
