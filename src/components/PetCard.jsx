/* eslint-disable react/prop-types */
function LostPetCard({ pet }) {
  return (
    <div>
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Location: {pet.location}</p>
      <p>Last Seen Date: {pet.lastSeenDate}</p>
      <img src={pet.imageUrl} alt={pet.name} width="170px" />
    </div>
  );
}

export default LostPetCard;
