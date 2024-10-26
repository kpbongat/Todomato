import sortAsc from "../../../src/assets/sort-asc.svg";
import sortDsc from "../../../src/assets/sort-dsc.svg";
import styles from "./TodoHeader.module.css";

function TodoHeader({ text, isActive, sortOrder, sortByCategory }) {
  return (
    <div className={styles.div2}>
      <button className={styles.button} onClick={sortByCategory} type="button">
        {text}
      </button>
      {isActive ? (
        <img
          className={styles.img}
          src={sortOrder === "asc" ? sortAsc : sortDsc}
          alt=""
          width="24px"
          height="auto"
        />
      ) : null}
    </div>
  );
}

export default TodoHeader;
