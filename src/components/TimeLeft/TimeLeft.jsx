import styles from "./TimeLeft.module.css";

function TimeLeft({ dueDate }) {
  const a = new Date();
  const b = new Date(dueDate);
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  const daysBetween = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  return (
    <span className={`${daysBetween < 3 ? styles.span : null}`}>
      {daysBetween > 0 ? daysBetween : 0} days left
    </span>
  );
}

export default TimeLeft;
