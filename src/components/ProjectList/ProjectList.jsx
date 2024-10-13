import Project from "../Project/Project";
import styles from "./ProjectList.module.css";

function ProjectList({
  todoList,
  setTodoList,
  selectedProject,
  setSelectedProject,
}) {
  const projects = todoList.reduce(
    (array, i) => [
      ...array,
      ...(i.project && !array.includes(i.project) ? [i.project] : []),
    ],
    []
  );
  return (
    <section className={styles.section}>
      {projects.map((i) => (
        <Project
          projectName={i}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </section>
  );
}

export default ProjectList;
