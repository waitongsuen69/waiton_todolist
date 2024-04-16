import React, { useState } from 'react';
import './App.css';

function App() {
  // checkbox action
  function toggleTask(id) {
    setTasks(tasks.map(function (task) {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      } else {
        return task;
      }
    }));
  };

  // delete object
  function deleteTask(id) {
    // Create a copy of the tasks array
    let tasksCopy = [...tasks];

    // Use a for loop to find and remove the task
    for (let i = 0; i < tasksCopy.length; i++) {
      if (tasksCopy[i].id === id) {
        tasksCopy.splice(i, 1);
        break; // Exit the loop after removing the item
      }
    }

    setTasks(tasksCopy);
  }

  // show task list
  // function TaskList({ tasks, toggleTask, deleteTask }) {
  function TaskList({ tasks, toggleTask }) {
    // function toggleTask
    return (
      <div>
        {tasks.map(task => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false }
  ]);

  return (
    <div>
      <h1>Task Manager</h1>
      {/* <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} /> */}
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
