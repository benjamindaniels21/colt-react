import "./pokemon.css"

const Pokemon = () => {
  const randomNum = Math.floor(Math.random() * 150) + 1;
  
  return (
    <div className="pokemon">
      <h1>Pokemon #{randomNum}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`} alt="Random Pokemon" />

    </div>
  )
}

export default Pokemon