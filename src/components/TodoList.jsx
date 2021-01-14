import React, { useState } from 'react';
import Todo from './Todo.jsx';
import TodoForm from './TodoForm.jsx';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newArray = [todo, ...todos];

    setTodos(newArray);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      Todo App
      <br />
      <span>Amount of Todos {todos.length}</span>
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
