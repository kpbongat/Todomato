import styles from "./EditTodo.module.css";

function EditTodo({ setEditFlag }) {
  return (
    <button className={styles.button} onClick={() => setEditFlag(true)}>
      Edit
    </button>
  );
}

export default EditTodo;
