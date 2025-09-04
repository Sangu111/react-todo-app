// ToDoList.js
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: '10px' }}>
        <span>Total: {tasks.length}</span>
        <span style={{ marginLeft: '15px' }}>Completed: {completedCount}</span>
      </div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.length === 0 ? (
        <p style={{ color: '#888', marginTop: '20px' }}>No tasks yet. Add your first task!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <ToDoItem
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
