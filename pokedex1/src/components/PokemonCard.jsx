function PokemonCard(props) {

  const pokemon = props.pokemon;
  
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p> ???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
