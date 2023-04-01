import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const decrementPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex-1)

    }
  }
  const incrementPokemon = () => {
    if (pokemonIndex < 4) {
      setPokemonIndex(pokemonIndex+1)

    }
  }
  return (

    <>
    <NavBar decrementPokemon={decrementPokemon} incrementPokemon={incrementPokemon} pokemonIndex={pokemonIndex} pokemonList={pokemonList}/>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </>
  //     <div style={{display:'flex'}}>
  //  {pokemonIndex > 0 ?  <button onClick={decrementPokemon}>Précédent</button> : "" }
  //     <PokemonCard pokemon={pokemonList[pokemonIndex]} />
  //     {pokemonIndex < pokemonList.length -1 ? <button onClick={incrementPokemon}>Suivant</button> : "" }
  //   </div>
  
  );
 
}

export default App;
