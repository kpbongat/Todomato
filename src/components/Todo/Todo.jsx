import styles from "./Todo.module.css";

function Todo({ todo }) {
  return (
    <div className={styles.div}>
      <span>{todo.name}</span>
      <span>{todo.dueDate}</span>
      <span>{todo.project}</span>
    </div>
  );
}
export default Todo;
