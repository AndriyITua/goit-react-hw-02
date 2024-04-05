export default function Options({ totalFeedback, onUpdate, onUpdateReset }) {
  if (totalFeedback !== 0) {
    return (
      <div>
        <button onClick={() => onUpdate("good")}>Good</button>
        <button onClick={() => onUpdate("neutral")}>Neutral</button>
        <button onClick={() => onUpdate("bad")}>Bad</button>
        <button onClick={onUpdateReset}>Reset</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => onUpdate("good")}>Good</button>
        <button onClick={() => onUpdate("neutral")}>Neutral</button>
        <button onClick={() => onUpdate("bad")}>Bad</button>
      </div>
    );
  }
}
