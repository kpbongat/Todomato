import styles from "./AddTodo.module.css";

function AddTodo({ pushTodoList }) {
  return (
    <button
      className={styles.button}
      onClick={() =>
        pushTodoList({
          name: "",
          dueDate: "",
          project: "",
        })
      }
    >
      +
    </button>
  );
}

export default AddTodo;
