function TodoItem({ todo, onToggle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
      
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      <span style={{ textDecoration: todo.done ? "line-through" : "none", color: todo.done ? "white" : "white" }}>
        {todo.text}
      </span>

    </div>
  );
}

export default TodoItem;