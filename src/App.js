import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header
        input={inputData}
        setInput={setInputData}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
};
// header --------------------section---------------------------------------

function Header({ input, setInput, todos, setTodos }) {
  function handlesubmit(e) {
    e.preventDefault();
    // if (input.trim() !== "") {
    //   setTodos([...todos, { input, checked: false }]);
    //   setInput("");
    // }
    if (input !== "" && todos.length < 15) {
      setTodos((prevTodos) => [...prevTodos, { name: input, checked: false }]);
      setInput("");
    } else {
      if (input == "") {
        alert("you cannot enter empty string");
      } else {
        alert("you cannot add more than 15 items");
      }
    }
  }
  return (
    <div className="header">
      <h1>TO-DO List</h1>
      <form className="header-form" onSubmit={handlesubmit}>
        <label>
          Input:
          <input
            type="text"
            name="name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
// todolist-------------------------------------------------------------->
function TodoList({ todos, setTodos }) {
  function handleClick(index) {
    // Check if the clicked item is already selected
    console.log("clicked index:", index);

    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            checked: !todo.checked, // Toggle the checked property
          };
        }
        return todo;
      });
      return updatedTodos;
    });
    console.log(todos);
  }
  return (
    <div className="todo-list">
      <ul className="todo">
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <span style={{ color: "red" }}>
              {index + 1}){todo.checked ? "☑️" : "❌"}
            </span>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
//footer-------------------------------------------------------------->
function Footer({ todos, setTodos }) {
  function handleDelete() {
    setTodos((prevTodos) => {
      const updateTodo = prevTodos.filter((item) => !item.checked);
      return updateTodo;
    });
  }
  function handleAll() {
    setTodos([]);
  }
  return (
    <div className="footer">
      <button onClick={handleDelete}>Delete</button>

      <button onClick={handleAll}>Delete All</button>
      <p>All rights reserved @ 2024 bigyan</p>
    </div>
  );
}
export default App;
