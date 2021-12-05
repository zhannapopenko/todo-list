import React from "react";
import { Todo } from "../Todo";
import { Box } from "@mui/system";

export const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <Box>
      {todos
        .map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))
        .reverse()}
    </Box>
  );
};
