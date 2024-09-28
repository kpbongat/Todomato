import TodoList from "../TodoList/TodoList";

function TodoPanel(props) {
  return (
    <main>
      <TodoList {...props} />
    </main>
  );
}
export default TodoPanel;
