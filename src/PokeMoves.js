import { moves } from "./data";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          <li>
            {item.id}. {item.move}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
