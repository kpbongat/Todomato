import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

function TodoList({ todoList, setTodoList }) {
  function updateTodoList(index, key, value) {
    const newTodo = [...todoList];
    newTodo[index][key] = value;
    setTodoList(newTodo);
  }
  return (
    <section className={styles.section}>
      {todoList.map((i, index) => (
        <Todo todo={i} updateTodoList={updateTodoList} todoIndex={index} />
      ))}
    </section>
  );
}
export default TodoList;
