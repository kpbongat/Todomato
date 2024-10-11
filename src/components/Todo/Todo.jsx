import { useState } from "react";
import RemoveTodo from "../RemoveTodo/RemoveTodo";
import TodoField from "../TodoField/TodoField";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import styles from "./Todo.module.css";

function Todo({
  todo,
  updateTodoList,
  removeTodoList,
  selectedTodo,
  setSelectedTodo,
  todoIndex,
}) {
  const [todoState, setTodoState] = useState({
    name: todo.name,
    dueDate: todo.dueDate,
    project: todo.project,
  });
  function updateTodoState(key, value) {
    setTodoState({ ...todoState, [key]: value });
  }
  return (
    <div
      className={`${styles.div} ${
        selectedTodo === todoIndex ? styles.todo : null
      }`}
      onFocus={() => setSelectedTodo(todoIndex)}
      onBlur={() => setSelectedTodo(null)}
      tabIndex="0"
    >
      <TodoField
        type="text"
        value={todoState.name}
        updateTodoState={(value) => updateTodoState("name", value)}
      />
      <TodoField
        type="text"
        value={todoState.dueDate}
        updateTodoState={(value) => updateTodoState("dueDate", value)}
      />
      <TodoField
        type="text"
        value={todoState.project}
        updateTodoState={(value) => updateTodoState("project", value)}
      />
      <UpdateTodo updateTodoList={() => updateTodoList(todoIndex, todoState)} />
      <RemoveTodo removeTodoList={() => removeTodoList(todoIndex)} />
    </div>
  );
}
export default Todo;
