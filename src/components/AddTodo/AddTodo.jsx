import styles from "./AddTodo.module.css";

function AddTodo({ pushTodoList }) {
  return (
    <button
      className={styles.button}
      onClick={() =>
        pushTodoList({
          name: "Write your task here!",
          dueDate: "Today!",
          project: "default",
        })
      }
    >
      +
    </button>
  );
}

export default AddTodo;
