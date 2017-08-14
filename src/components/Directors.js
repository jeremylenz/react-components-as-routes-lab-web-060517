import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
        <div>
          <h3>Name: {director.name}</h3>
          <h3>Movies: {director.movies.join(", ")}</h3>
          <br />
        </div>
      )
      })}
    </div>
  );
}

export default Directors
