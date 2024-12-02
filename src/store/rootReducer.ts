import {combineReducers} from '@reduxjs/toolkit';
import todoSlice from './todo/todo.slice';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  todo: todoSlice,
});

export default persistReducer(persistConfig, rootReducer);
