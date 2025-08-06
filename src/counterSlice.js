import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      const num = Number(action.payload);
      state.counter += num;
    },
    decrement: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

// export const increment = counterSlice.actions.increment;
// export const decrement = counterSlice.actions.decrement;
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
