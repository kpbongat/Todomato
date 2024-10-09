import { useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoPanel.module.css";
function TodoPanel(props) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  return (
    <main className={styles.main}>
      <ProjectList {...props} />
      <TodoList
        {...props}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
    </main>
  );
}
export default TodoPanel;
