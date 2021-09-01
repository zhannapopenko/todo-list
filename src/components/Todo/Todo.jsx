import { useState } from "react";
import style from "./Todo.module.css";

export const Todo = ({ todo, toggleTodo, removeTodo }) => {
  const [changeItem, setChangeItem] = useState(false);
  const [updateInputValue, setUpdateInputValue] = useState(todo.task);

  return (
    <div key={todo.id} className={style.todoInput}>
      <div
        className={todo.complete && style.todoComplete}
        onClick={() => toggleTodo(todo.id)} >
        
        {changeItem ? 
        (<input value={updateInputValue} onChange={(e) => setUpdateInputValue(e.target.value)}/>) 
        : (updateInputValue)
        }
      </div>

        {changeItem ?
        (<button onClick={() => {setChangeItem(false);}}>Save</button> ) 
        : (<button onClick={() => {setChangeItem(true);}}>Change</button>)
        }

      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};
