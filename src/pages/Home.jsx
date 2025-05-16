import React, { useState } from 'react';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const Home = ({ searchQuery }) => {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Latest Movies</h1>
      {searchQuery && <div className="search-results-info">
        Showing results for: "{searchQuery}"
      </div>}
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="no-results">
            No movies found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;