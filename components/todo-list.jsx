
import React, {useState} from 'react';
import TodoItem from './todo-item.jsx';

const TodoList = () => {
  const [todos, setTodos] = useState(['get logs', 'light fire']);
  // const todos = ['get logs', 'light fire'];
  const addTodoItem = ({text = 'Sweepy'}) => {
    console.log('Called addtdItem');
    setTodos([...todos, text]);
  }
  return (
    <div>
      Num of things to do: {todos.length}
      {
        todos.map(
          (todo, index) => {
          return <div key={index}>{index}: {todo}</div>
          }
        )
      }
      <TodoItem addTodoItem={addTodoItem}/>
    </div>
  );
};

export default TodoList;