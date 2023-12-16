export default function Log({ playerTurns }) {
  return (
    <ol id="log">
      {playerTurns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
