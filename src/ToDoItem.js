// ToDoItem.js
import React from 'react';

function ToDoItem({ task, onToggleComplete, onDelete }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
