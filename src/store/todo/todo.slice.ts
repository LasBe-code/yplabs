import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITodo, IUpdateTodoReq} from './todo.type';

type stateType = {
  todoList: ITodo[];
  pageNo: number;
  pageSize: number;
  isEndPage: boolean;
  isLoading: boolean;
  error: string[] | null;
};

const initialState: stateType = {
  todoList: [],
  pageNo: 1,
  pageSize: 10,
  isEndPage: false,
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    resetTodo: () => initialState,
    getTodoListFetch: state => ({
      ...state,
      isLoading: true,
    }),
    getTodoListSuccess: (state, actions) => {
      const {pageNo, pageSize} = state;
      const todoList = actions.payload;
      const paginationList = todoList.slice(0, pageNo * pageSize);
      const isEndPage = pageNo * pageSize >= todoList.length;
      return {
        ...state,
        isLoading: false,
        todoList: paginationList,
        pageNo: pageNo + 1,
        isEndPage,
      };
    },
    getTodoListFailure: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload,
    }),
    createTodoRequest: (state, _: PayloadAction<string>) => ({
      ...state,
      isLoading: true,
    }),
    createTodoSuccess: (state, action) => ({
      ...state,
      todoList: state.todoList
        ? [action.payload, ...state.todoList]
        : [action.payload],
      isLoading: false,
    }),
    createTodoFailure: (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.payload,
    }),
    deleteTodoRequest: (state, _: PayloadAction<number>) => ({
      ...state,
      isLoading: true,
    }),
    deleteTodoSuccess: (state, actions) => {
      const removedList = state.todoList.filter(
        item => item.id !== actions.payload,
      );
      return {...state, todoList: removedList, isLoading: false};
    },
    deleteTodoFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    updateTodoRequest: (state, _: PayloadAction<IUpdateTodoReq>) => {
      return {...state, isLoading: true};
    },
    updateTodoSuccess: (state, actions: PayloadAction<ITodo>) => {
      const updatedItem = actions.payload;
      const updatedList = state.todoList.map(item => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      });
      return {...state, todoList: updatedList, isLoading: false};
    },
    updateTodoFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});
export const {
  resetTodo,
  getTodoListFetch,
  getTodoListSuccess,
  getTodoListFailure,
  createTodoRequest,
  createTodoSuccess,
  createTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFailure,
} = todoSlice.actions;
export default todoSlice.reducer;
