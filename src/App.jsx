import './App.css';
import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { getPetsByType } from './services/firebase/firestore.functions';

function App() {
  useEffect(() => {
    console.log(getPetsByType('cat'));
  }, []);

  return (
    <>
      <div>
        <h1>PetFinder</h1>
      </div>
    </>
  );
}

export default App;
