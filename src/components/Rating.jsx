import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating, interactive = false, onRate }) => {
  const [hover, setHover] = useState(null);

  if (interactive) {
    return (
      <div className="interactive-rating">
        {[...Array(10)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => onRate(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={20}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <span>{rating}</span>
      </div>
    );
  }

  return (
    <div className="static-rating">
      <FaStar color="#ffc107" size={16} />
      <span>{rating}/10</span>
    </div>
  );
};

export default Rating;