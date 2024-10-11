import RemoveTodo from "../RemoveTodo/RemoveTodo";
import TodoField from "../TodoField/TodoField";
import styles from "./TodoDetail.module.css";

function TodoDetail({ todoList, setTodoList, selectedTodo }) {
  function removeTodoList(index) {
    const newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  }
  function updateTodoList(index, key, value) {
    const newTodo = [...todoList];
    newTodo[index][key] = value;
    setTodoList(newTodo);
  }
  const todo = todoList[selectedTodo];
  return (
    <section className={styles.section}>
      <TodoField
        type="text"
        value={todo.name}
        updateTodoList={(value) => updateTodoList(selectedTodo, "name", value)}
      />
      <TodoField
        type="text"
        value={todo.dueDate}
        updateTodoList={(value) =>
          updateTodoList(selectedTodo, "dueDate", value)
        }
      />
      <TodoField
        type="text"
        value={todo.project}
        updateTodoList={(value) =>
          updateTodoList(selectedTodo, "project", value)
        }
      />
      <RemoveTodo removeTodoList={() => removeTodoList(selectedTodo)} />
    </section>
  );
}
export default TodoDetail;
