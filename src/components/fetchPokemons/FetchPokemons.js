import { Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth/authState";
import {
  getNumberOfPokemons,
  getPokemons,
} from "../../store/pokemons/pokemonsState";
import { fetchPokemonsAction } from "../../store/pokemons/pokemonsStateExtraReducers";
import IndividualPokemon from "./IndividualPokemon";

import styles from "./pokemons.module.css";

const FetchPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemons);
  const numberOfPokemons = useSelector(getNumberOfPokemons);

  const fetchPokemonsHandler = () => {
    dispatch(fetchPokemonsAction());
  };

  const logoutHandler = () => {
    dispatch(authActions.logOut());
  };

  console.log(pokemons);

  return (
    <>
      <button className={styles.button} onClick={fetchPokemonsHandler}>
        Fetch Pokemons!
      </button>
      <h2>There are {numberOfPokemons} Pokemons!</h2>
      <ul className={styles.list}>
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.url}>
              <IndividualPokemon name={pokemon.name} url={pokemon.url} />
              <Divider />
            </div>
          );
        })}
      </ul>
      <button className={styles.button} onClick={logoutHandler}>
        Log Out
      </button>
    </>
  );
};

export default FetchPokemons;
