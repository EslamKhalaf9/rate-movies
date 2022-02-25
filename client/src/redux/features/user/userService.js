import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user';

const register = async (userDate) => {
  const { data } = await axios.post(`${API_URL}/register`, userDate);

  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  return data;
};

const login = async (userDate) => {
  const { data } = await axios.post(`${API_URL}/login`, userDate);

  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  return data;
};

const userService = { register, login };

export default userService;
