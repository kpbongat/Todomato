import { useState } from "react";
import styles from "./TodoField.module.css";
function TodoField({ initialValue, type, updateTodoList }) {
  const [state, setState] = useState(0);
  const [value, setValue] = useState(initialValue);

  return state === 0 ? (
    <button className={styles.button} type="button" onClick={() => setState(1)}>
      {value}
    </button>
  ) : (
    <input
      autoFocus
      type={type}
      value={value}
      onBlur={() => setState(0)}
      onChange={(e) => {
        setValue(e.target.value);
        updateTodoList(e.target.value);
      }}
    />
  );
}
export default TodoField;
