import LoginForm from "./components/login/LoginForm";
import FetchPokemons from "./components/fetchPokemons/FetchPokemons";
import PokemonProfile from "./components/fetchPokemons/PokemonProfile";

import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions, getIsLoggedIn } from "./store/auth/authState";
import { getLoading, getPokemonProfile } from "./store/pokemons/pokemonsState";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const pokemonProfile = useSelector(getPokemonProfile);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.setIsLoggedIn());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>
        HiveTech Pokemon with Redux & Redux Toolkit
      </h1>
      {loading && <h1>Loading......</h1>}
      {!isLoggedIn && !loading && <LoginForm onFinish={loginHandler} />}
      {isLoggedIn && !loading && Object.keys(pokemonProfile).length === 0 && (
        <FetchPokemons />
      )}
      {isLoggedIn && !loading && Object.keys(pokemonProfile).length > 0 && (
        <PokemonProfile
          name={pokemonProfile.name}
          height={pokemonProfile.height}
          weight={pokemonProfile.weight}
          moves={pokemonProfile.moves}
        />
      )}
    </div>
  );
}

export default App;
