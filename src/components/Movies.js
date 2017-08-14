import React from 'react';
import { movies } from '../data';

const Movie = (props) => {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <p>Time: {props.time}</p>
      <p>Genres: {props.genres}</p>
    </div>

  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
            <div>
              <h3>Title: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres: {movie.genres}</p>
            </div>
        )
      })
      }
    </div>
  );
};

export default Movies;
