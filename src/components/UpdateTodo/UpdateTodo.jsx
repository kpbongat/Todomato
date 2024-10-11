import styles from "./UpdateTodo.module.css";

function UpdateTodo({ updateTodoList }) {
  return (
    <button className={styles.button} onClick={updateTodoList}>
      ✓
    </button>
  );
}

export default UpdateTodo;
