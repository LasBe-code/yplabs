import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import todoApi from './todo.api';
import {ITodo, IUpdateTodoReq} from './todo.type';
// prettier-ignore
import {
  getTodoListFailure, getTodoListFetch,   getTodoListSuccess,
  createTodoFailure,  createTodoRequest,  createTodoSuccess,
  deleteTodoFailure,  deleteTodoRequest,  deleteTodoSuccess,
  updateTodoFailure,  updateTodoRequest,  updateTodoSuccess,
} from './todo.slice';
import {PayloadAction} from '@reduxjs/toolkit';

function* getTodoList() {
  try {
    const response: ITodo[] = yield call(todoApi.getAll);
    const sortedList = response.length
      ? response.sort((a, b) => b.create_at.localeCompare(a.create_at))
      : null;
    yield put(getTodoListSuccess(sortedList));
  } catch (error) {
    yield put(getTodoListFailure(error));
  }
}

function* createTodo(action: PayloadAction<string>) {
  try {
    const response: ITodo = yield call(todoApi.create, action.payload);
    yield put(createTodoSuccess(response));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

function* deleteTodo(action: PayloadAction<number>) {
  try {
    yield call(todoApi.remove, action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

function* updateTodo(action: PayloadAction<IUpdateTodoReq>) {
  try {
    const response: ITodo = yield call(todoApi.update, action.payload);
    yield put(updateTodoSuccess(response));
  } catch (error) {
    yield put(updateTodoFailure(error));
  }
}

function* watchGetTodoList() {
  yield takeLatest(getTodoListFetch.type, getTodoList);
}
function* watchCreateTodo() {
  yield takeLatest(createTodoRequest.type, createTodo);
}
function* watchDeleteTodo() {
  yield takeLatest(deleteTodoRequest.type, deleteTodo);
}
function* watchUpdateTodo() {
  yield takeLatest(updateTodoRequest.type, updateTodo);
}

export default function* todoSaga() {
  yield all([
    fork(watchGetTodoList),
    fork(watchCreateTodo),
    fork(watchDeleteTodo),
    fork(watchUpdateTodo),
  ]);
}
