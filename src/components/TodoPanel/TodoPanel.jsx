import { useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoPanel.module.css";
import TodoDetail from "../TodoDetail/TodoDetail";
function TodoPanel(props) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editFlag, setEditFlag] = useState(false);
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
        setEditFlag={setEditFlag}
      />
      {editFlag ? <TodoDetail {...props} selectedTodo={selectedTodo} /> : null}
    </main>
  );
}
export default TodoPanel;
