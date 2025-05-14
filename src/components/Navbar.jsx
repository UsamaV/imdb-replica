import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">IMDB Replica</Link>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;