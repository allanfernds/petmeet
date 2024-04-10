import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PetsProvider } from './context/PetsContext.jsx';
import { UserAuthContextProvider } from './context/UserAuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserAuthContextProvider>
      <PetsProvider>
        <App />
      </PetsProvider>
    </UserAuthContextProvider>
  </BrowserRouter>
);
