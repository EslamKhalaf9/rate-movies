import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return ( 
    <div className="flex flex-col w-1/5 mx-1 bg-white rounded my-4 border border-gray-100">
      <div className="poster">
        <img src={movie.Poster} />
      </div>
      <div className="card-content p-2">
        <p className="text-yellow-700 font-bold">
          <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
        </p>
        <p>({movie.Year})</p>
      </div>
    </div>
   );
}
 
export default MovieItem;