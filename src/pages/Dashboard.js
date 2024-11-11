// src/pages/Dashboard.js

import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasksUpdated, setTasksUpdated] = useState(false);

  const handleTaskAdded = () => {
    setTasksUpdated(!tasksUpdated); // Refresh task list
  };

  return (
    <div className="dashboard">
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
};

export default Dashboard;
