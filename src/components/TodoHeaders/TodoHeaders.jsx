import styles from "./TodoHeaders.module.css";

function TodoHeaders({ setSortRule, sortOrder, setSortOrder }) {
  function sortByName(a, b) {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name === "") return 1;
    if (b.name === "") return 1;
    if (sortOrder === "asc") {
      return a.name > b.name ? 1 : -1;
    } else {
      return a.name > b.name ? -1 : 1;
    }
  }

  return (
    <div className={styles.div}>
      <button
        className={styles.button}
        onClick={() => {
          setSortRule(() => sortByName);
          setSortOrder(sortOrder === "asc" ? "dsc" : "asc");
        }}
        type="button"
      >
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
