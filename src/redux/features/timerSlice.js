import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalWorkTime: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    addWorkedTime: (state, action) => {
      state.totalWorkTime += action.payload;
    },
  },
});

export const { addWorkedTime } = timerSlice.actions;
export default timerSlice.reducer;
