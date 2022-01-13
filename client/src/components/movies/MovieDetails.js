import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MovieView from "./MovieView";
const MovieDetails = () => {
  const [movie, setMovie] = useState(false);
  const id = useParams().id;
  const API_PATH = "https://www.omdbapi.com/";
  const API_KEY = "4f078e44";

  useEffect(async () => {
    const url = `${API_PATH}?i=${id}&apikey=${API_KEY}`;
    let result = await axios.get(url);
    console.log(result);
    result = result.data;
    setMovie(result);
  }, []);
  return (
    <div className='md:mt-8 mt-8 flex flex-col justify-center md:flex-row'>
      {movie && <MovieView movie={movie} />}
    </div>
  );
};

export default MovieDetails;
