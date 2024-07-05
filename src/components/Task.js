// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, editTask } from '../features/tasks/TasksSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleEditTask = () => {
    dispatch(editTask({ id: task.id, description: editedDescription }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={e => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Enregistrer</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        </>
      )}
      <button onClick={handleToggleStatus}>
        {task.isDone ? 'Non Fait' : 'Fait'}
      </button>
    </div>
  );
};

export default Task;
