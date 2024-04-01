import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PetsProvider } from './context/PetsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PetsProvider>
      <App />
    </PetsProvider>
  </BrowserRouter>
);
