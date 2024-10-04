import { useState } from "react";
import Header from "../Header/Header";
import TodoPanel from "../TodoPanel/TodoPanel";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header />
      <TodoPanel todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
export default App;
