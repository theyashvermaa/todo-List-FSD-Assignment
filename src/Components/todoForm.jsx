import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", marginRight: "8px", width: "250px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 14px", color: "white", backgroundColor: "green" }}>
        Add Task
      </button>
    </div>
  );
}

export default TodoForm;