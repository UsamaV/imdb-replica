import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import CastList from '../components/CastList';
import Rating from '../components/Rating';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [userRating, setUserRating] = useState(null);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleRate = (rating) => {
    setUserRating(rating);
    alert(`You rated ${movie.title} with ${rating} stars!`);
  };

  return (
    <div className="movie-details">
      <div className="movie-header">
        <img src={movie.poster} alt={movie.title} className="movie-poster-large" />
        <div className="movie-info">
          <h1>{movie.title} ({movie.year})</h1>
          <p>Directed by: {movie.director}</p>
          <div className="rating-section">
            <h3>IMDB Rating</h3>
            <Rating rating={movie.rating} />
          </div>
          <div className="user-rating">
            <h3>Your Rating</h3>
            <Rating 
              rating={userRating || 0} 
              interactive={true} 
              onRate={handleRate}
            />
          </div>
        </div>
      </div>
      <div className="movie-plot">
        <h3>Plot</h3>
        <p>{movie.plot}</p>
      </div>
      <CastList cast={movie.cast} />
    </div>
  );
};

export default MovieDetails;