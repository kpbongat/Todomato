import { useState } from "react";
import styles from "./TodoField.module.css";
function TodoField({ value, type }) {
  const [state, setState] = useState(0);

  return state === 0 ? (
    <button className={styles.button} type="button" onClick={() => setState(1)}>
      {value}
    </button>
  ) : (
    <input autoFocus type={type} value={value} onBlur={() => setState(0)} />
  );
}
export default TodoField;
