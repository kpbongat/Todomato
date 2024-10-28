import styles from "./TickTodo.module.css";
function TickTodo({ tickTodoList }) {
  return (
    <input className={styles.input} type="checkbox" onChange={tickTodoList} />
  );
}

export default TickTodo;
