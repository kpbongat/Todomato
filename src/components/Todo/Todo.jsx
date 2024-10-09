import RemoveTodo from "../RemoveTodo/RemoveTodo";
import TodoField from "../TodoField/TodoField";
import styles from "./Todo.module.css";

function Todo({
  todo,
  updateTodoList,
  removeTodoList,
  selectedTodo,
  setSelectedTodo,
  todoIndex,
}) {
  return (
    <div
      className={`${styles.div} ${
        selectedTodo === todoIndex ? styles.todo : null
      }`}
      onClick={() => setSelectedTodo(todoIndex)}
    >
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
