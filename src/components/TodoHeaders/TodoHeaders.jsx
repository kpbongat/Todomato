import { useState } from "react";
import styles from "./TodoHeaders.module.css";
import TodoHeader from "../TodoHeader/TodoHeader";

function TodoHeaders({ setSortRule }) {
  function sortByName(sortOrder) {
    return (a, b) => {
      if (a.name == b.name) {
        return 0;
      }
      if (a.name === "") return 1;
      if (b.name === "") return -1;
      if (sortOrder === "asc") {
        return a.name > b.name ? 1 : -1;
      } else {
        return a.name > b.name ? -1 : 1;
      }
    };
  }
  function sortByDate(sortOrder) {
    return (a, b) => {
      if (a.dueDate == b.dueDate) {
        return 0;
      }
      if (a.dueDate === "") return 1;
      if (b.dueDate === "") return -1;
      if (sortOrder === "asc") {
        return a.dueDate > b.dueDate ? 1 : -1;
      } else {
        return a.dueDate > b.dueDate ? -1 : 1;
      }
    };
  }

  function sortByProject(sortOrder) {
    return (a, b) => {
      if (a.project == b.name) {
        return 0;
      }
      if (a.project === "") return 1;
      if (b.project === "") return -1;
      if (sortOrder === "asc") {
        return a.project > b.project ? 1 : -1;
      } else {
        return a.project > b.project ? -1 : 1;
      }
    };
  }

  function sortByCategory(category) {
    const nextSortOrder =
      category != currentCategory ? "dsc" : sortOrder === "asc" ? "dsc" : "asc";

    switch (category) {
      case "task":
        setSortRule(() => sortByName(nextSortOrder));
        break;
      case "dueDate":
        setSortRule(() => sortByDate(nextSortOrder));
        break;
      case "project":
        setSortRule(() => sortByProject(nextSortOrder));
        break;
    }

    setSortOrder(nextSortOrder);
    setCurrentCategory(category);
  }
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentCategory, setCurrentCategory] = useState("task");
  return (
    <div className={styles.div}>
      <span></span>
      <TodoHeader
        text={"Task"}
        isActive={currentCategory === "task"}
        sortOrder={sortOrder}
        sortByCategory={() => sortByCategory("task")}
      />
      <TodoHeader
        text={"Due Date"}
        isActive={currentCategory === "dueDate"}
        sortOrder={sortOrder}
        sortByCategory={() => sortByCategory("dueDate")}
      />
      <TodoHeader
        text={"Project"}
        isActive={currentCategory === "project"}
        sortOrder={sortOrder}
        sortByCategory={() => sortByCategory("project")}
      />
      <span></span>
    </div>
  );
}

export default TodoHeaders;
