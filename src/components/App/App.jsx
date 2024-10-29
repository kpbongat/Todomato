import { useEffect, useState } from "react";
import Header from "../Header/Header";
import TodoPanel from "../TodoPanel/TodoPanel";
import styles from "./App.module.css";
function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todoList")) || []);
  }, []);
  return (
    <div className={styles.div}>
      <Header />
      <TodoPanel
        todoList={todoList}
        setTodoList={(state) => {
          localStorage.setItem("todoList", JSON.stringify(state));
          setTodoList(state);
        }}
      />
    </div>
  );
}
export default App;
