import Project from "../Project/Project";
import styles from "./ProjectList.module.css";

function ProjectList({ todoList, setTodoList }) {
  const projects = todoList.reduce(
    (array, i) => [...array, ...(i.project ? [i.project] : [])],
    []
  );
  return (
    <section className={styles.section}>
      {projects.map((i) => (
        <Project projectName={i} />
      ))}
    </section>
  );
}

export default ProjectList;
