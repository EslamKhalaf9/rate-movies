import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return ( 
    <div className="movie-list flex flex-wrap content-center justify-around">
      {movies.length ?
        movies.map(movie => <MovieItem key={movie.imdbID} movie={movie} />)
      : null}
    </div>
   );
}
 
export default MovieList;