import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

function TodoList({
  todoList,
  setTodoList,
  selectedTodo,
  setSelectedTodo,
  setEditFlag,
}) {
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
  function updateTodoList(index, state) {
    const newTodo = [...todoList];
    newTodo[index] = state;
    setTodoList(newTodo);
  }

  const todoComponents = todoList.map((i, index) => (
    <Todo
      todo={i}
      updateTodoList={updateTodoList}
      removeTodoList={removeTodoList}
      selectedTodo={selectedTodo}
      setSelectedTodo={setSelectedTodo}
      setEditFlag={setEditFlag}
      todoIndex={index}
    />
  ));
  todoComponents.push(<AddTodo pushTodoList={pushTodoList} />);

  return <section className={styles.section}>{todoComponents}</section>;
}
export default TodoList;
