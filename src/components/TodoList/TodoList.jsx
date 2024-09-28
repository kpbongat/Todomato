import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

function TodoList({ todoList }) {
  return (
    <section className={styles.section}>
      {todoList.map((i) => (
        <Todo todo={i} />
      ))}
    </section>
  );
}
export default TodoList;
