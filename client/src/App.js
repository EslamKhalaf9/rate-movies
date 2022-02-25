import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MovieDetails from './components/movies/MovieDetails';
import SearchPage from './components/movies/SearchPage';
import Header from './components/shared/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<SearchPage />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
