import { useState } from "react";
import RemoveTodo from "../RemoveTodo/RemoveTodo";
import TodoField from "../TodoField/TodoField";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import styles from "./Todo.module.css";
import EditTodo from "../EditTodo/EditTodo";
import TimeLeft from "../TimeLeft/TimeLeft";

function Todo({
  todo,
  updateTodoList,
  removeTodoList,
  selectedTodo,
  setSelectedTodo,
  setEditFlag,
}) {
  const [todoState, setTodoState] = useState({
    key: todo.key,
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
        selectedTodo === todoState.key ? styles.todo : null
      }`}
      onFocus={() => setSelectedTodo(todoState.key)}
      tabIndex="0"
    >
      <TodoField
        type="text"
        placeholder="Enter your task name here"
        value={todoState.name}
        updateTodoState={(value) => updateTodoState("name", value)}
        setEdited={setEdited}
      />
      <div className={styles.flex}>
        <TodoField
          type="date"
          min={new Date()}
          value={todoState.dueDate}
          updateTodoState={(value) => updateTodoState("dueDate", value)}
          setEdited={setEdited}
        />
        {todoState.dueDate && committed ? (
          <TimeLeft dueDate={todoState.dueDate} />
        ) : null}
      </div>
      <TodoField
        type="text"
        value={todoState.project}
        updateTodoState={(value) => updateTodoState("project", value)}
        setEdited={setEdited}
      />
      <div className={styles.flex}>
        {committed ? <EditTodo setEditFlag={setEditFlag} /> : null}
        {edited ? (
          <UpdateTodo
            updateTodoList={() => updateTodoList(todoState.key, todoState)}
            setCommitted={setCommitted}
          />
        ) : null}
        <RemoveTodo removeTodoList={() => removeTodoList(todoState.key)} />
      </div>
    </div>
  );
}
export default Todo;
