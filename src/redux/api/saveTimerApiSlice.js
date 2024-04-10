import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/timer'

export const saveWorkedTimeToDb = (workedTime) => axios.post(baseUrl, {
  workedTime
});

// createAsyncThunk(
//   'type/saveWorkedTime',
//   async (data) => {
//     try {
//       const response = await axios.post(baseUrl);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );