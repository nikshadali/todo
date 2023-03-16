import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return (state = state.filter((item) => item !== action.payload));
      console.log("remove =>", state);
    },
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
