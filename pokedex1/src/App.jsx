import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const incrementIndex = () => {
    if (pokemonIndex < 4) {
      setPokemonIndex(pokemonIndex+1);

    }
  }
  const decrementIndex = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex-1)

    }
  }

  return (
    <div style={{display: 'flex'}}>
        <button onClick={decrementIndex}>Précedent</button>

      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <figure>
       <img />
      <figcaption></figcaption>
    </figure>
    <button onClick={incrementIndex}>Suivant</button>


    </div>
  );
}

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



export default App;
