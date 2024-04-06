import css from "../Options/Options.module.css";

export default function Options({ totalFeedback, onUpdate, onUpdateReset }) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 ? <button onClick={onUpdateReset}>Reset</button> : ""}
    </div>
  );
}
