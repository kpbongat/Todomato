import RemoveTodo from "../RemoveTodo/RemoveTodo";
import TodoField from "../TodoField/TodoField";
import styles from "./Todo.module.css";

function Todo({ todo, updateTodoList, removeTodoList, todoIndex }) {
  return (
    <div className={styles.div}>
      <TodoField
        type="text"
        value={todo.name}
        updateTodoList={(value) => updateTodoList(todoIndex, "name", value)}
      />
      <TodoField
        type="text"
        value={todo.dueDate}
        updateTodoList={(value) => updateTodoList(todoIndex, "dueDate", value)}
      />
      <TodoField
        type="text"
        value={todo.project}
        updateTodoList={(value) => updateTodoList(todoIndex, "project", value)}
      />
      <RemoveTodo removeTodoList={() => removeTodoList(todoIndex)} />
    </div>
  );
}
export default Todo;
