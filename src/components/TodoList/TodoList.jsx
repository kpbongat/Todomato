import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

function TodoList({ todoList, setTodoList }) {
  function pushTodoList(todo) {
    const newTodo = [...todoList];
    newTodo.push(todo);
    setTodoList(newTodo);
  }
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

  const todoComponents = todoList.map((i, index) => (
    <Todo
      todo={i}
      updateTodoList={updateTodoList}
      removeTodoList={removeTodoList}
      todoIndex={index}
    />
  ));
  todoComponents.push(<AddTodo pushTodoList={pushTodoList} />);

  return <section className={styles.section}>{todoComponents}</section>;
}
export default TodoList;
