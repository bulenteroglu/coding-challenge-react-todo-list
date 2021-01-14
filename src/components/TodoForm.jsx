import React, { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ id: Date.now(), input: input });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='Add Todo'
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
