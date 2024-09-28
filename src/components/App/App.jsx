import { useState } from "react";
import Header from "../Header/Header";
import TodoPanel from "../TodoPanel/TodoPanel";

function App() {
  const [todoList, setTodoList] = useState([]);
  function initializeTodoList() {
    setTodoList([
      {
        name: "Write your task here!",
        dueDate: "Today!",
        project: "default",
      },
    ]);
  }
  if (!todoList.length) {
    initializeTodoList();
  }
  return (
    <>
      <Header />
      <TodoPanel todoList={todoList} />
    </>
  );
}
export default App;
