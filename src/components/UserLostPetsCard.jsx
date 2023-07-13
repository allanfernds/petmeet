/* eslint-disable react/prop-types */

function UserLostPetsCard({ pet, handleMarkAsFound }) {
  return (
    <div className="card flex items-center p-4 border border-green-500">
      <div className="flex-shrink-0 mr-4">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{pet.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{pet.type}</p>
        <p className="text-sm text-gray-600 mb-1">{pet.breed}</p>
        <p className="text-sm text-gray-600 mb-1">{pet.location}</p>
        <p className="text-sm text-gray-600 mb-1">{pet.lastSeenDate}</p>
        {!pet.found && (
          <button
            onClick={() => handleMarkAsFound(pet.id)}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Marcar como encontrado
          </button>
        )}
      </div>
    </div>
  );
}

export default UserLostPetsCard;
