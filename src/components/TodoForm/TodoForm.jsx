import React from "react";
import { useState } from "react";


export const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  }
  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Write To-Do"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

