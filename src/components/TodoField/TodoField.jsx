import { useState } from "react";
import styles from "./TodoField.module.css";
function TodoField({ value, type, updateTodoState }) {
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
      onBlur={() => {
        if (value) {
          setState(0);
        }
      }}
      onChange={(e) => {
        updateTodoState(e.target.value);
      }}
    />
  );
}
export default TodoField;
