// src/components/TaskForm.js

import React, { useState } from 'react';
import axios from '../utils/axios';

const TaskForm = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/tasks', { taskName });
      onTaskAdded(response.data); // Notify parent component
      setTaskName('');
    } catch (err) {
      setError('Failed to add task');
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

