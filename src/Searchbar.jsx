import React from "react";
import SearchIcon from './search.svg';

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className='search'>
      <input
        placeholder='Search for Movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={onSearch}
      />
      
    </div>
  );
}

