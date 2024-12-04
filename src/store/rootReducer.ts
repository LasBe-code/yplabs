import {combineReducers} from '@reduxjs/toolkit';
import todoSlice from './todo/todo.slice';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import isDoneTodoSlice from './isDoneTodo/isDoneTodo.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['isDoneTodo'],
};

const rootReducer = combineReducers({
  todo: todoSlice,
  isDoneTodo: isDoneTodoSlice,
});

export default persistReducer(persistConfig, rootReducer);
