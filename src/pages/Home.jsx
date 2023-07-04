import { useUserAuth } from '../context/UserAuthContext';

function Home() {
  const { logOut } = useUserAuth();

  return (
    <div>
      Home
      <button onClick={logOut}>Sair</button>
    </div>
  );
}

export default Home;
