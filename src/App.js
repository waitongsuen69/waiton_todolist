import React, { useState } from 'react';
import './App.css';

// function TaskList({ tasks, toggleTask, deleteTask }) {
  function TaskList({ tasks }) {
    return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            // onChange={() => toggleTask(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          {/* <button onClick={() => deleteTask(task.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false }
  ]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks = {tasks} />
    </div>
  );
}

export default App;
