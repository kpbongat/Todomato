import { useState } from "react";
import Header from "../Header/Header";
import TodoPanel from "../TodoPanel/TodoPanel";
import styles from "./App.module.css";
function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className={styles.div}>
      <Header />
      <TodoPanel todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
export default App;
