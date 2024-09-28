import TodoField from "../TodoField/TodoField";
import styles from "./Todo.module.css";

function Todo({ todo }) {
  return (
    <div className={styles.div}>
      <TodoField type="text" value={todo.name} />
      <TodoField type="text" value={todo.dueDate} />
      <TodoField type="text" value={todo.project} />
    </div>
  );
}
export default Todo;
