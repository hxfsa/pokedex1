import App from "../App";

function NavBar(props) {
   const { decrementPokemon, incrementPokemon, pokemonIndex, pokemonList } = props;
   if(pokemonIndex == [3]) {
    alert("pika pikachu !!!")
   }
    return (
        <div >
   {pokemonIndex > 0 ?  <button onClick={decrementPokemon}>Précédent</button> : "" }
      {pokemonIndex < pokemonList.length -1 ? <button onClick={incrementPokemon}>Suivant</button> : "" }
      
    </div>
      );
}

export default NavBar
