import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
      </Link>
      <div className="movie-info">
        <Link to={`/movie/${movie.id}`} className="movie-title">{movie.title}</Link>
        <div className="movie-year">{movie.year}</div>
        <Rating rating={movie.rating} />
      </div>
    </div>
  );
};

export default MovieCard;