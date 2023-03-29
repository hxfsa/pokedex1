function PokemonCard() {
  const pokemon = pokemonList[0];
  const {name, imgSrc} = pokemon;

  return (
    <figure>
       {imgSrc ? <img src = {imgSrc}/> : <p> ???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


export default PokemonCard;

