import React, { useState } from 'react';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredMovies(movies);
      return;
    }
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="home-page">
      <h1>Latest Movies</h1>
      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;