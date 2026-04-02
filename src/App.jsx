import { useState } from "react";
import initialTodos from "./data/initTodo";
import TodoForm from "./Components/todoForm";
import TodoList from "./Components/todoList";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd(text) {
    const newTodo = { id: Date.now(), text: text, done: false };
    setTodos([...todos, newTodo]);
  }

  function handleToggle(id) {
    setTodos(todos.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  }

   function handleClear() {
    setTodos([]);
  }

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "500px" }}>
      <h2>To Do List</h2>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} />

      {todos.length > 0 && (
        <button onClick={handleClear} style={{ marginTop: "20px", padding: "8px 14px", cursor: "pointer", color: "white", background: "red"}}>
          Reset Tasks
        </button>
      )}
    </div>
  );
}