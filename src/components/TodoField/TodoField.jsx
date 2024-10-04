import { useState } from "react";
import styles from "./TodoField.module.css";
function TodoField({ value, type, updateTodoList }) {
  const [state, setState] = useState(value ? 0 : 1);
  return state === 0 ? (
    <button className={styles.button} type="button" onClick={() => setState(1)}>
      {value}
    </button>
  ) : (
    <input
      autoFocus={!!value}
      type={type}
      value={value}
      onBlur={() => setState(0)}
      onChange={(e) => {
        updateTodoList(e.target.value);
      }}
    />
  );
}
export default TodoField;
