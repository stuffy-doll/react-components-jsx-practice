const bulbImage = require("./images/bulbasaur.jpg");

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    types: "Grass/Poison",
    move: "Vine Whip"
  };
  return (
    <div>
      <h1>{`${favPokemon}`}'s Showcase Component</h1>
      <h2>
        Bulbasaur's type is{" "}
        <span
          style={{
            background: "linear-gradient(to right, green, purple)",
            color: "white"
          }}
        >
          {pokeCharacteristics.types}
        </span>
      </h2>
      <img src={bulbImage} alt="Nothing Here"></img>
    </div>
  );
}

export default Showcase;
