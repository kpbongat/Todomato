import styles from "./RemoveTodo.module.css";

function RemoveTodo({ removeTodoList }) {
  return <button className={styles.button} onClick={removeTodoList}></button>;
}

export default RemoveTodo;
