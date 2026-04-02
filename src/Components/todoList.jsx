import TodoItem from "./todoItem";

function TodoList({ todos, onToggle }) {
  if (todos.length === 0) {
    return <p style={{ color: "gray" }}>No tasks yet. Add one above!</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;