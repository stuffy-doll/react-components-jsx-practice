import "./App.css";
import Showcase from "./Showcase";
import BaseStats from "./BaseStats";
import PokeMoves from "./PokeMoves";

function App() {
  const baseStats = {
    hp: 45,
    atk: 49,
    def: 49,
    spAtk: 65,
    spDef: 65,
    spd: 45
  };
  function handleClick() {
    alert(
      `Special Stats\n\tSpecial Attack: ${baseStats.spAtk}\n\tSpecial Defense: ${baseStats.spDef}`
    );
  }
  return (
    <div className="background">
      <Showcase />
      <BaseStats stats={baseStats} clicker={handleClick} />
      <PokeMoves />
    </div>
  );
}

export default App;
