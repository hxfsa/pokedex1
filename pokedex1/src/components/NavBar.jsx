import App from "../App";

function NavBar(props) {
   const { pokemonList, handleClick } = props;
    return (
        <div style={{display:'flex'}}>
          {pokemonList.map((pokemon, index) => <button key={index} onClick={() => {handleClick(index)}}>{pokemon.name}</button>)}
    </div>
      );
}

export default NavBar