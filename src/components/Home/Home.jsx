import React, { useState } from "react";
import { Todo } from "../Todo/Todo";
import { TodoForm } from "../TodoForm/TodoForm";

export const Home = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (input) => {
    if (input) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: input,
        complete: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <div>
          <Todo
            todo={todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </div>
      ))}
    </div>
  );
};
