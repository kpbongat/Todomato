import { useState } from "react";
import styles from "./TodoField.module.css";
function TodoField({
  value,
  type,
  min = null,
  max = null,
  placeholder,
  updateTodoState,
  setEdited,
}) {
  const [state, setState] = useState(value ? 0 : 1);
  return state === 0 ? (
    <button className={styles.button} type="button" onClick={() => setState(1)}>
      {value}
    </button>
  ) : (
    <input
      className={styles.input}
      autoFocus={!!value}
      type={type}
      min={min ? min.toISOString().split("T")[0] : null}
      value={value}
      placeholder={placeholder}
      onBlur={() => {
        if (value) {
          setState(0);
        }
      }}
      onChange={(e) => {
        updateTodoState(e.target.value);
        setEdited(true);
      }}
    />
  );
}
export default TodoField;
