import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import TodoHeaders from "../TodoHeaders/TodoHeaders";
import { useState } from "react";

function TodoList({
  todoList,
  setTodoList,
  selectedTodo,
  setSelectedTodo,
  selectedProject,
}) {
  function pushTodoList(todo) {
    const newTodo = [...todoList];
    newTodo.push(todo);
    setTodoList(newTodo);
  }
  function tickTodoList(key) {
    const newTodo = [...todoList];
    const done = newTodo[newTodo.findIndex((i) => i.key === key)].done;
    newTodo[newTodo.findIndex((i) => i.key === key)].done = done ? false : true;
    setTodoList(newTodo);
  }
  function removeTodoList(key) {
    const newTodo = [...todoList];
    newTodo.splice(
      newTodo.findIndex((i) => i.key === key),
      1
    );
    setTodoList(newTodo);
  }
  function updateTodoList(key, state) {
    const newTodo = [...todoList];
    newTodo[newTodo.findIndex((i) => i.key === key)] = state;
    setTodoList(newTodo);
  }

  function sortByName(a, b) {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name === "") return 1;
    if (b.name === "") return -1;
    return a.name > b.name ? 1 : -1;
  }

  const [sortRule, setSortRule] = useState(() => sortByName);
  const todoComponents = todoList.toSorted(sortRule).map((i) => {
    if (selectedProject && selectedProject != i.project) {
      return null;
    }
    return (
      <Todo
        key={i.key}
        todo={i}
        tickTodoList={tickTodoList}
        updateTodoList={updateTodoList}
        removeTodoList={removeTodoList}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
    );
  });
  todoComponents.unshift(
    <TodoHeaders key={"todoHeadersKey"} setSortRule={setSortRule} />
  );
  todoComponents.push(
    <AddTodo
      key={"addTodoKey"}
      pushTodoList={pushTodoList}
      selectedProject={selectedProject}
    />
  );

  return <section className={styles.section}>{todoComponents}</section>;
}
export default TodoList;
