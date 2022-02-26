import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieSearch from './MovieSearch';
import MovieList from './MoviesList';
import { searchMovies } from '../../redux/features/movies/moviesSlice';

const SearchPage = () => {
  const { movies: fetchedMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState(fetchedMovies);
  const [name, setName] = useState('');
  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies]);
  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(searchMovies(name));
  };
  return (
    <div className='flex flex-col content-center text-center'>
      <MovieSearch onSearch={handleSearch} name={name} setName={setName} />
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
