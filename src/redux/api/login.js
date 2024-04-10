import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/users/signin';

export const signIn = (user) => {
  axios.post(baseUrl, user);
}