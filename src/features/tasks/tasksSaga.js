import { takeEvery, call, put, takeLatest, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorege } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks, } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exmapleTasks = yield call(getExampleTasks);
    yield put(setTasks(exmapleTasks))
  } catch (error) {
    yield call(alert, "coś poszło nie tak");
  }
}

function* saveTasksInLocalStoregeHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorege, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStoregeHandler);
}