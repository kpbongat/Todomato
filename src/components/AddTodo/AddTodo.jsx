import styles from "./AddTodo.module.css";

function AddTodo({ pushTodoList, selectedProject }) {
  return (
    <button
      className={styles.button}
      onClick={() =>
        pushTodoList({
          name: "",
          dueDate: "",
          project: selectedProject ? selectedProject : "Default Project",
        })
      }
    >
      +
    </button>
  );
}

export default AddTodo;
