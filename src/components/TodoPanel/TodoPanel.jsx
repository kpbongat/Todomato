import { useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoPanel.module.css";
function TodoPanel(props) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <main className={styles.main}>
      <ProjectList
        {...props}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <TodoList
        {...props}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
        selectedProject={selectedProject}
      />
    </main>
  );
}
export default TodoPanel;
