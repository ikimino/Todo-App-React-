import React from "react";

function TodoItem({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map(item => (item.id === todo.id ? { ...item, completed: true } : item))
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
