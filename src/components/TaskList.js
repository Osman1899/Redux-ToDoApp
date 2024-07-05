// src/components/ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = filter !== undefined
    ? tasks.filter(task => task.isDone === filter)
    : tasks;

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
