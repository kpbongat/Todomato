import styles from "./TodoHeaders.module.css";

function TodoHeaders() {
  return (
    <div className={styles.div}>
      <button className={styles.button} type="button">
        Task
      </button>
      <button className={styles.button} type="button">
        Due Date
      </button>
      <button className={styles.button} type="button">
        Project
      </button>
      <span></span>
    </div>
  );
}

export default TodoHeaders;
