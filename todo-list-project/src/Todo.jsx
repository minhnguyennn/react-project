import { useState } from "react";
import "./style.css";

function generateId() {
  return Math.floor(Math.random() * 100);
}

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: generateId(),
      });
    });
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New todo..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
