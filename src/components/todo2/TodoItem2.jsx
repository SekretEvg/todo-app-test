import React from "react";

const TodoItem2 = ({
  todo,
  deleteTodo,
  toggleCompleteTodo,
  toggleEditingTodo,
}) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleCompleteTodo(todo.id)}
        className={todo.completed ? "completed" : ""}
      >
        {todo.title}
      </p>
      <div>
        <button
          className="action-btn"
          onClick={() => toggleEditingTodo(todo.id)}
        >
          EDIT
        </button>
        <button
          className="action-btn trash-icon"
          onClick={() => deleteTodo(todo.id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem2;
