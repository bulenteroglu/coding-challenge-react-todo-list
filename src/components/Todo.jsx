import React, { useState } from 'react';
import clsx from 'clsx';
import TodoForm from './TodoForm';

const Todo = ({ todo, completeTodo, removeTodo, updateTodo }) => {
  const [checked, setChecked] = useState(false);

  const [edit, setEdit] = useState({
    id: null,
    input: '',
  });

  const handleChange = () => {
    setChecked(!checked);
    completeTodo(todo.id);
  };

  const submitUpdate = (input) => {
    updateTodo(edit.id, input);
    setEdit({
      id: null,
      input: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className='todo-item'>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <div className={clsx('todo-text', checked ? 'complete-item' : undefined)}>
        {todo.input}
      </div>
      <svg
        onClick={() => removeTodo(todo.id)}
        className='todo-trash'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
          clipRule='evenodd'
        />
      </svg>
      <svg
        onClick={() => setEdit({ id: todo.id, input: todo.input })}
        className='todo-edit'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
      </svg>
    </div>
  );
};

export default Todo;
