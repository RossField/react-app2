
import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list.jsx";

const App = () => {
  return <div>Hello Ross :)<TodoList /> </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));