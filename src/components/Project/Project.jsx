import styles from "./Project.module.css";

function Project({ projectName, selectedProject, setSelectedProject }) {
  return (
    <div
      className={`${styles.div} ${
        selectedProject === projectName ? styles.project : null
      }`}
      onFocus={() => setSelectedProject(projectName)}
      tabIndex="0"
    >
      {projectName}
    </div>
  );
}

export default Project;
