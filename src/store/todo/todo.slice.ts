import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: '',
  reducers: {
    test: state => {
      return state + 'test';
    },
  },
});
export const {test} = todoSlice.actions;
export default todoSlice.reducer;
