// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/TasksSlice'; // assurez-vous que c'est en minuscules

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
