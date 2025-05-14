import React from 'react';

const CastList = ({ cast }) => {
  return (
    <div className="cast-list">
      <h3>Cast</h3>
      <ul>
        {cast.map(person => (
          <li key={person.id} className="cast-member">
            <div className="cast-name">{person.name}</div>
            <div className="cast-character">as {person.character}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;