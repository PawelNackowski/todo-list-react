import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTasks: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks, payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks.splice(index, 1);
    },
    setAlldone: ({ tasks }) => {
      tasks.forEach((task) => task.done = true);
    },
  },
});

export const { addTasks, toggleHideDone, toggleTaskDone, removeTask, setAlldone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;