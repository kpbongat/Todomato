import styles from "./Project.module.css";

function Project({ projectName }) {
  return <div className={styles.div}>{projectName}</div>;
}

export default Project;
