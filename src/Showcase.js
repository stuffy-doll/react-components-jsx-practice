import "./Showcase.css";
const bulbImage = require("./images/bulbasaur.jpg");

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    types: "Grass/Poison",
    move: "Vine Whip"
  };
  return (
    <div className="showcase">
      <h1>{`${favPokemon}`}'s Showcase Component</h1>
      <img
        src={bulbImage}
        alt="Nothing Here"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "20px"
        }}
      ></img>
      <h2>
        Bulbasaur's type is{" "}
        <span
          style={{
            background: "linear-gradient(to right, green, purple)",
            color: "white"
          }}
        >
          {pokeCharacteristics.types}
        </span>{" "}
        and it knows{" "}
        <span
          style={{
            backgroundColor: "green",
            color: "white"
          }}
        >
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
