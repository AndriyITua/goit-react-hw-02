import css from "../Options/Options.module.css";

export default function Options({ totalFeedback, onUpdate, onUpdateReset }) {
  if (totalFeedback !== 0) {
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
        <button onClick={onUpdateReset}>Reset</button>
      </div>
    );
  } else {
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
      </div>
    );
  }
}
