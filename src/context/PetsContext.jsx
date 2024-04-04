/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [lostPets, setLostPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <PetsContext.Provider
      value={{
        lostPets,
        setLostPets,
        searchTerm,
        setSearchTerm,
        filteredPets,
        setFilteredPets,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};

export default PetsContext;
1;
