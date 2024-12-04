import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: number[] = [];

const isDoneTodoSlice = createSlice({
  name: 'isDoneTodo',
  initialState,
  reducers: {
    doneTodo: (state, action: PayloadAction<number>) => [
      ...state,
      action.payload,
    ],
    cancelDoneTodo: (state, action: PayloadAction<number>) => {
      const filteredList = state.filter(id => id !== action.payload);
      return filteredList;
    },
  },
});

export const {cancelDoneTodo, doneTodo} = isDoneTodoSlice.actions;
export default isDoneTodoSlice.reducer;
