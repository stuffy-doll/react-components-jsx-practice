import "./BaseStats.css";

const BaseStats = ({ stats: { hp, atk, def, spd }, clicker }) => {
  return (
    <div className="base-stats">
      <h1>BaseStats</h1>
      <button className="sp-stats" onClick={clicker}>
        Check Special Stats
      </button>
      <table>
        <tbody>
          <tr>
            <td>Hit Points</td>
            <td>{hp}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{atk}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{def}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{spd}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BaseStats;
