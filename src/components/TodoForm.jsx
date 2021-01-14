import React, { useState } from 'react';

const TodoForm = ({ onSubmit, edit }) => {
  const [input, setInput] = useState(edit ? edit.input : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ id: Date.now(), input: input, isCompleted: false });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            placeholder='Edit'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name='text'
            className='input'
          />
          <button onClick={handleSubmit} className='todo-button update'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Add Todo'
          />
          <button className='todo-button'>Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
