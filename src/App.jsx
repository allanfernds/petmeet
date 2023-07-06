import { Route, Routes } from 'react-router-dom';
import './App.css';
import PhoneSignUp from './pages/PhoneSignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProfileCheck from './components/ProfileCheck';
import UpdateUserInfo from './pages/UpdateUserInfo';
import CreateLostPetForm from './components/CreateLostPetForm';
import Header from './components/Header';
// import CreateLostPetForm from './components/CreateLostPetForm';

function App() {
  return (
    <>
      <UserAuthContextProvider>
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
          <Route path="/update-user-info" element={<UpdateUserInfo />} />
          <Route path="/phonesignup" element={<PhoneSignUp />} />
          <Route path="/create-lost-pet" element={<CreateLostPetForm />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
