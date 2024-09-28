import { useEffect, useState } from "react";
import Header from "../Header/Header";
import TodoPanel from "../TodoPanel/TodoPanel";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!todoList.length) {
      setTodoList([
        {
          name: "Write your task here!",
          dueDate: "Today!",
          project: "default",
        },
      ]);
    }
  });
  return (
    <>
      <Header />
      <TodoPanel todoList={todoList} />
    </>
  );
}
export default App;
