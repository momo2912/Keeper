import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskList: [],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state,action) => {
      state.taskList.push(action.payload);
    },
    removeTask: (state,action) => {
      taskIndex = taskList.find(task => task.title === action.payload)
      state.taskList.splice(taskIndex, 1);
    },

  },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = taskSlice.actions

export default taskSlice.reducer