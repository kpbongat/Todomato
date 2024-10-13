import { useState } from "react";
import RemoveTodo from "../RemoveTodo/RemoveTodo";
import TodoField from "../TodoField/TodoField";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import styles from "./Todo.module.css";
import EditTodo from "../EditTodo/EditTodo";

function Todo({
  todo,
  updateTodoList,
  removeTodoList,
  selectedTodo,
  setSelectedTodo,
  setEditFlag,
  todoIndex,
}) {
  const [todoState, setTodoState] = useState({
    name: todo.name,
    dueDate: todo.dueDate,
    project: todo.project,
  });
  const [committed, setCommitted] = useState(false);
  const [edited, setEdited] = useState(false);

  function updateTodoState(key, value) {
    setTodoState({ ...todoState, [key]: value });
  }
  return (
    <div
      className={`${styles.div} ${
        selectedTodo === todoIndex ? styles.todo : null
      }`}
      onFocus={() => setSelectedTodo(todoIndex)}
      tabIndex="0"
    >
      <TodoField
        type="text"
        value={todoState.name}
        updateTodoState={(value) => updateTodoState("name", value)}
        setEdited={setEdited}
      />
      <TodoField
        type="text"
        value={todoState.dueDate}
        updateTodoState={(value) => updateTodoState("dueDate", value)}
        setEdited={setEdited}
      />
      <TodoField
        type="text"
        value={todoState.project}
        updateTodoState={(value) => updateTodoState("project", value)}
        setEdited={setEdited}
      />
      {committed ? <EditTodo setEditFlag={setEditFlag} /> : null}

      {edited ? (
        <UpdateTodo
          updateTodoList={() => updateTodoList(todoIndex, todoState)}
          setCommitted={setCommitted}
        />
      ) : null}
      <RemoveTodo removeTodoList={() => removeTodoList(todoIndex)} />
    </div>
  );
}
export default Todo;
