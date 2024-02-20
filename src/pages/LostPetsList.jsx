import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LostPetCard from '../components/PetCard';
import { listAllLostPets } from '../services/firebase/firestore.functions';
import {
  getPetsByLocation,
  getPetsByBreed,
} from '../services/firebase/firestore.functions';
import { BsFilter, BsFillHouseFill, BsFillPersonFill } from 'react-icons/bs';
import { BiX } from 'react-icons/bi';
import FilterInput from '../components/FilterInput';
import Loading from '../components/Loading';

function LostPetsList() {
  const [lostPets, setLostPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Inside useEffect');
    const fetchLostPets = async () => {
      console.log('Fetching lost pets');
      let pets = [];
      if (filterType === null && filterValue === null) {
        console.log('Fetching all lost pets');
        pets = await listAllLostPets();
      } else if (filterType === 'location') {
        console.log('Fetching lost pets by location');
        pets = await getPetsByLocation(filterValue);
      } else if (filterType === 'breed') {
        console.log('Fetching lost pets by breed');
        pets = await getPetsByBreed(filterValue);
      }
      setLostPets(pets);
      setLoading(false);
    };

    fetchLostPets();
  }, [filterType, filterValue]);
  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
    setFilterType(null);
    setFilterValue(null);
    setInputValue('');
  };

  const handleFilterByLocation = () => {
    setFilterType('location');
    setIsFilterOpen(false);
  };

  const handleFilterByBreed = () => {
    setFilterType('breed');
    setIsFilterOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFilterConfirm = () => {
    setFilterValue(inputValue);
  };

  const handleResetFilter = () => {
    setIsFilterOpen(false);
    setFilterType(null);
    setFilterValue(null);
    setInputValue('');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col items-center mx-2 h-screen">
        {filterType && (
          <div className="fixed flex items-center justify-center gap-2 w-full bg-green-500 p-2">
            <FilterInput
              placeholder={
                filterType === 'location'
                  ? 'Digite o nome do bairro'
                  : 'Digite o nome da raça'
              }
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleFilterConfirm();
                }
              }}
            />
          </div>
        )}
        {filterType && (
          <button
            className="fixed bottom-4 left-16 bg-red-200 rounded-full p-3 ml-4 shadow-lg"
            onClick={handleResetFilter}
          >
            <BiX size="2em" />
          </button>
        )}
        <div className="overflow-y-auto mt-12">
          {lostPets.map((pet) => (
            <Link key={pet.id} to={`/lost-pets/${pet.id}`}>
              <LostPetCard pet={pet} />
            </Link>
          ))}
        </div>
        {isFilterOpen && (
          <div className="fixed bottom-16 left-4 flex flex-col gap-2 mb-4">
            <button
              className="flex items-center bg-gray-100 shadow-md shadow-gray-400 rounded-full px-4 py-2"
              onClick={handleFilterByLocation}
            >
              <BsFillHouseFill className="text-green-500 mr-2" />
              <span>Filtrar por bairro</span>
            </button>
            <button
              className="flex items-center bg-gray-100 shadow-md shadow-gray-400 rounded-full px-4 py-2"
              onClick={handleFilterByBreed}
            >
              <BsFillPersonFill className="text-green-500 mr-2" />
              <span>Filtrar por raça</span>
            </button>
          </div>
        )}
        <button
          className="fixed bottom-4 left-4 bg-green-500 rounded-full p-3 shadow-xl"
          onClick={handleFilterClick}
        >
          <BsFilter className="text-white" size="2em" />
        </button>
      </div>
    </>
  );
}

export default LostPetsList;
