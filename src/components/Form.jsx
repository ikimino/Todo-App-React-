import React from "react";

function Form({ setStatus, inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = e => {
    console.log(e.target);
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    let errorMessage = document.getElementById("errorMessage");
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.floor(Math.random() * 100) },
      ]);
      setInputText("");
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
    }
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={submitTodoHandler} type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div id="errorMessage" className="error">
        <span>Empty field cannot be added to the list</span>
      </div>
    </div>
  );
}

export default Form;
