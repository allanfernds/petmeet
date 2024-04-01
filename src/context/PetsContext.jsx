/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [lostPets, setLostPets] = useState([]);

  return (
    <PetsContext.Provider value={{ lostPets, setLostPets }}>
      {children}
    </PetsContext.Provider>
  );
};

export default PetsContext;
1;
