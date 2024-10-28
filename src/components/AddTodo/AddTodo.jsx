import styles from "./AddTodo.module.css";

function AddTodo({ pushTodoList, selectedProject }) {
  return (
    <button
      className={styles.button}
      onClick={() =>
        pushTodoList({
          key: crypto.randomUUID(),
          name: "",
          dueDate: "",
          project: selectedProject ? selectedProject : "Default Project",
          done: false,
        })
      }
    >
      +
    </button>
  );
}

export default AddTodo;
