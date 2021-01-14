import React from 'react';
import TodoList from './components/TodoList';

// TODO:
// Add a checklist item to the list ✔️
// Remove a checklist item from the list ✔️
// Mark checklist items and complete and incomplete ✔️

// Bonus:
// Added Editing todo feature

export default function app() {
  return (
    <div className='todo-list'>
      <TodoList />
    </div>
  );
}
