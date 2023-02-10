import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTasks: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks, payload: findId }) => {
      const index = tasks.findIndex(({ id }) => id === findId);
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