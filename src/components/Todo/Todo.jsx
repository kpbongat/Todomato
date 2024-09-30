import TodoField from "../TodoField/TodoField";
import styles from "./Todo.module.css";

function Todo({ todo, updateTodoList, todoIndex }) {
  return (
    <div className={styles.div}>
      <TodoField
        type="text"
        initialValue={todo.name}
        updateTodoList={(value) => updateTodoList(todoIndex, "name", value)}
      />
      <TodoField
        type="text"
        initialValue={todo.dueDate}
        updateTodoList={(value) => updateTodoList(todoIndex, "dueDate", value)}
      />
      <TodoField
        type="text"
        initialValue={todo.project}
        updateTodoList={(value) => updateTodoList(todoIndex, "project", value)}
      />
    </div>
  );
}
export default Todo;
