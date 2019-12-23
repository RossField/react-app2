
import React, { useState } from "react";

const TodoItem = ({ addTodoItem }) => {
  const [text, setText] = useState('');
  const handleClick = () => {
    if (text) {
      addTodoItem({text: text});
      setText('');
    }
  }
  const handleChange = event => {
    setText(event.target.value)
  }
  // function handleChange(e) {
  //   setText(e.target.value)
  // }
  return (
      <div>
        <input type="text" value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Add Item</button>
      </div>
  );
};

export default TodoItem;