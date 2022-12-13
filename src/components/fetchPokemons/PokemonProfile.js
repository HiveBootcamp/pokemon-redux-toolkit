const PokemonProfile = (props) => {
  return (
    <>
      <h1>Name: {props.name} </h1>
      <br />
      <p>Height: {props.height}</p>
      <p>Weight: {props.weight}</p>
      <p>Moves: </p>
      <ul>
        {props.moves.slice(0, 10).map((move) => {
          return <li key={Math.random()}>{move.move.name}</li>;
        })}
      </ul>
    </>
  );
};

export default PokemonProfile;
