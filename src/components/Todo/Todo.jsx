import style from "./Todo.module.css";

export const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div key={todo.id}>
      <div
        className={todo.complete ? style.todoComplete : style.todo}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.task}
      </div>
      <div onClick={() => removeTodo(todo.id)}>remove</div>
    </div>
  );
};
