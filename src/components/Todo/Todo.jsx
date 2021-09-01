import style from "./Todo.module.css";

export const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div key={todo.id} className={style.todoInput}>
      <div
        className={todo.complete && style.todoComplete}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.task}
      </div>
      <div onClick={() => removeTodo(todo.id)}>Remove</div>
    </div>
  );
};