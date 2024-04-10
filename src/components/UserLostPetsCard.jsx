/* eslint-disable react/prop-types */

function UserLostPetsCard({ pet, handleMarkAsFound }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            src={pet.imageUrl}
            alt={pet.name}
            className="h-48 w-full object-cover md:h-full md:w-48"
          />
        </div>
        <div className="p-8">
          <h3 className="text-lg font-semibold">{pet.name}</h3>
          <p className="text-sm text-gray-600 mb-1">{pet.type}</p>
          <p className="text-sm text-gray-600 mb-1">{pet.breed}</p>
          <p className="text-sm text-gray-600 mb-1">{pet.location}</p>
          <p className="text-sm text-gray-600 mb-1">
            {pet.lastSeenDate.split('-').reverse().join('/')}
          </p>

          {pet.found ? (
            <button
              disabled={true}
              className="bg-gray-300  text-white font-semibold py-2 px-4 rounded mt-2"
            >
              Encontrado
            </button>
          ) : (
            <button
              onClick={() => handleMarkAsFound(pet.id)}
              className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded mt-2"
            >
              Marcar como encontrado
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserLostPetsCard;
