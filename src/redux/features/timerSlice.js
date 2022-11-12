import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {
  totalWorkTime: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    addWorkedTime: (state, action) => {
      state.totalWorkTime += action.payload;
      if(action.payload >= 600) {
        toast.success("Great job, you have finished a session.");
      }
    },
  },
});

export const { addWorkedTime } = timerSlice.actions;
export default timerSlice.reducer;
