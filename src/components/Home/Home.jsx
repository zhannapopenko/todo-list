import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Header";
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((todos) => {
        setTodos(todos.data);
      });
  }, []);

  const addTodo = (input) => {
    if (input) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        title: input,
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
    <Box>
      <Header />
      <TodoForm addTodo={addTodo} />
      {todos.length ? (
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ) : (
        <Typography
          variant="h4"
          component="h3"
          sx={{
            marginTop: "3rem",
            color: "#1f71db",
            display: "flex",
            justifyContent: "center",
          }}
        >
          NO TO-DOS!
        </Typography>
      )}
    </Box>
  );
};
