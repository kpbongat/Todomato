import styles from "./UpdateTodo.module.css";

function UpdateTodo({ updateTodoList, setCommitted }) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        updateTodoList();
        setCommitted(true);
      }}
    >
      ✓
    </button>
  );
}

export default UpdateTodo;
