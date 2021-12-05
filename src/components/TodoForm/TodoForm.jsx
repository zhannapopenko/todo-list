import React from "react";
import { useState } from "react";
import { todoFormStyles } from "./TodoForm.style";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";


export const TodoForm = ({ addTodo }) => {
  const styles = todoFormStyles();
  const inputValue = useInputValue("");
  function useInputValue(defaultValue = "") {
    const [input, setInput] = useState(defaultValue);
    return {
      bind: {
        value: input,
        onChange: (e) => setInput(e.target.value),
      },
      clear: () => setInput(""),
    };
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (inputValue.bind.value.trim()) {
      addTodo(inputValue.bind.value);
      inputValue.clear();
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <Box className={styles.box}>
        <TextField
          className={styles.textField}
          type="search"
          label="Write To-Do and push Enter"
          {...inputValue.bind}
        />
      </Box>
    </form>
  );
};
