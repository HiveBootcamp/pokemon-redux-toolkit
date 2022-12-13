import { useDispatch } from "react-redux";
import { fetchPokemonsProfileAction } from "../../store/pokemons/pokemonsStateExtraReducers";
import styles from "./pokemons.module.css";

const IndividualPokemon = (props) => {
  const dispatch = useDispatch();

  const fetchPokemonProfileHandler = (url) => {
    dispatch(fetchPokemonsProfileAction(url));
  };

  return (
    <li className={styles.listItem}>
      <p>
        Pokemon name:{" "}
        <span className={styles.listItemTextData}>{props.name}</span>
      </p>
      <p>
        Pokemon URL:{" "}
        {/* <span className={styles.listItemTextData}>{props.url}</span> */}
        <button onClick={() => fetchPokemonProfileHandler(props.url)}>
          {props.url}
        </button>
      </p>
    </li>
  );
};

export default IndividualPokemon;
