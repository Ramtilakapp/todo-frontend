// src/components/TaskList.js

import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleComplete = async (taskId) => {
    try {
      await axios.put(`/tasks/${taskId}`, { completed: true });
      fetchTasks(); // Refresh the task list
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  return (
    <div className="task-list">
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task-item">
            <span>{task.taskName}</span>
            {!task.completed && (
              <button onClick={() => handleComplete(task._id)}>Complete</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
