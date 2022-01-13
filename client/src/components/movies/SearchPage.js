import { useState } from "react";
import axios from "axios";

import MovieSearch from "./MovieSearch";
import MovieList from "./MoviesList";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");
  const API_PATH = 'https://www.omdbapi.com/';
  const API_KEY = '4f078e44';
  const handleSearch = async (e) => {
    e.preventDefault();
    // http://www.omdbapi.com/?s=batman&apikey=4f078e44
    const url = `${API_PATH}?s=${name}&apikey=${API_KEY}`;
    //calling API and change state
    let result = await axios.get(url)
    result = result.data.Search;
    setMovies(result)
    //reset the input field
    setName('');

    // logging ther result for debugging
    console.log(result);
  }
  return ( 
    <div className="flex flex-col content-center text-center">
      <MovieSearch onSearch={handleSearch} name={name} setName={setName} />
      <MovieList movies={movies} />
    </div>
   );
}
 
export default SearchPage;