import axios from 'axios';

const API_PATH = 'https://www.omdbapi.com/';
const API_KEY = '4f078e44';

const searchMovies = async (title) => {
  const url = `${API_PATH}?s=${title}&apikey=${API_KEY}`;
  //calling API and change state
  let result = await axios.get(url);
  result = result.data.Search;
  return result;
};

const moviesServices = {
  searchMovies,
};

export default moviesServices;
