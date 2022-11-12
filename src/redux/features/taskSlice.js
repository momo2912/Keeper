import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  currentTask: {},
  finishedTask: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    removeTask: (state, action) => {
      const taskIndex = state.taskList.findIndex(
        (task) => task.id === action.payload
      );
      state.taskList.splice(taskIndex, 1);
      state.finishedTask.splice(taskIndex, 1);
    },
    statusCheck: (state, action) => {
      // console.log(action.payload)

      const taskIndex = state.taskList.findIndex((task) => task.id === action.payload.id)
      const task = state.taskList[taskIndex];
      state.taskList[taskIndex].done = action.payload.done

      if(state.taskList[taskIndex].done && !state.finishedTask.includes(task)) {
        // console.log("TASK DONE")
        state.finishedTask.push(task);

      } if (!state.taskList[taskIndex].done) {
        // console.log("TASK UNDONE")
        state.finishedTask.splice(taskIndex,1);
        
      }
    },

    updateTask: (state, action) => {
      const taskIndex = state.taskList.findIndex(
        (task) => task.id === action.payload.id
      );
      state.taskList.splice(taskIndex, 1, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask, statusCheck, updateTask } =
  taskSlice.actions;

export default taskSlice.reducer;
