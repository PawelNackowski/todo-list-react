import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
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
    fetchExampleTasks: () => { },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    }
  },
});

export const {
  addTasks,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAlldone,
  fetchExampleTasks,
  setTasks
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreEpmtyTask = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId)

export default tasksSlice.reducer;