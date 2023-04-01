import PropTypes from "prop-types";

function PokemonCard(props) {
  console.log(props)
  const pokemon = props.pokemon;
  // console.log(pokemon)

  return (
    <figure >
      {pokemon.imgSrc ? 
        <img src={pokemon.imgSrc} alt={`Photo de ${pokemon.name}`} />
       : 
        <p>???</p>
      }
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,}).isRequired,
  }


export default PokemonCard;
