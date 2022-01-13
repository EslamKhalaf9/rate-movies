import { MdFormatQuote } from 'react-icons/md';

import Tag from '../shared/Tag';

const MovieView = ( {movie} ) => {
  const genre = movie.Genre.split(', ');
  const actors = movie.Actors.split(', ');
  const directors = movie.Director.split(', ');
  return ( 
    <>
    <div className="row md:mr-5">
        <img src={movie.Poster} alt="movie poster" className="mx-auto" />
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold mt-2 text-center mx-auto block"
          style={{ maxWidth: '90%' }}
        >
          {movie.Title} ({movie.Year})
        </a>
      </div>
      <div className="row mt-5 text-center md:text-left">
        <p className="text-xl mb-3">Rated: {movie.Rated}</p>
        <div className="flex flex-wrap justify-center md:justify-start">
          <span className="text-xl">Director: </span>
          {directors.length
            ? directors.map((director, index) => (
                <Tag name={director} key={index} />
              ))
            : null}
        </div>
        <div className="my-2 flex flex-wrap justify-center md:justify-start">
          <span className="text-xl">Genre: </span>
          {genre.length
            ? genre.map((g, index) => <Tag name={g} key={index} />)
            : null}
        </div>
        <div className="my-2 flex flex-wrap justify-center md:justify-start">
          <span className="text-xl">Actors: </span>
          {actors.length
            ? actors.map((actor, index) => <Tag name={actor} key={index} />)
            : null}
        </div>
        <div className="my-2 flex flex-wrap justify-center md:justify-start">
          <p className="p-3 bg-gray-100 rounded max-w-screen-md">
            <MdFormatQuote />
            {movie.Plot} <MdFormatQuote className="ml-auto" />
          </p>
        </div>
        <div className="my-2 flex flex-wrap justify-center text-xl">
          <span className="mr-3">IMDB: {movie.Ratings[0].Value}</span>
          <span className="mr-3">Rotten Tomatoes: {movie.Ratings[1].Value}</span>
        </div>
      </div>
    </>
   );
}
 
export default MovieView;