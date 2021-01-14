import React, { useState } from 'react';
import TodoForm from './TodoForm.jsx';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newArray = [todo, ...todos];

    setTodos(newArray);
  };

  console.log(...todos);

  return (
    <div>
      Todo App
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};

export default TodoList;
