import React, { useState } from 'react';

const TodoForm = ({}) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={onSubmit}>
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
