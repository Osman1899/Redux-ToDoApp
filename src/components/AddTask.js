// src/components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/TasksSlice';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    dispatch(addTask(newTask));
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Ajouter Tâche</button>
    </div>
  );
};

export default AddTask;
