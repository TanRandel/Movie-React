import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies,searchTerm}) {
   if (searchTerm === ""){
    return <h2>Search Movies</h2>;
   } 
    else if (movies.length === 0) {
      return <h2>No Movies Found</h2>;
  }
    
  return (
    <>
      <h2>{movies.length} Movies Found</h2>
      <div className='container'>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
    );
  }
  