import ProjectList from "../ProjectList/ProjectList";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoPanel.module.css";
function TodoPanel(props) {
  return (
    <main className={styles.main}>
      <ProjectList {...props} />
      <TodoList {...props} />
    </main>
  );
}
export default TodoPanel;
