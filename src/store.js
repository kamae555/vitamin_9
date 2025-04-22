// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // Immer 라이브러리 덕분에 이렇게 써도 됨!
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
