import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import SearchBar from './Searchbar';

const API_URL = "https://www.omdbapi.com/?apikey=2a0ff8ca&s";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    try {
      if (title) {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className='app'>
      <h1>CineFlix</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => searchMovies(searchTerm)}
      />
     <MovieList movies={movies} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
