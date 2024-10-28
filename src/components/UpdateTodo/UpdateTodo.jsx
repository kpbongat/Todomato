import styles from "./UpdateTodo.module.css";

function UpdateTodo({ updateTodoList, setCommitted, setEdited }) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        updateTodoList();
        setCommitted(true);
        setEdited(false);
      }}
    >
      Save
    </button>
  );
}

export default UpdateTodo;
