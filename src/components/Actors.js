import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div>
            <h3>Actor name: {actor.name}</h3>
            <h4>Movies: {actor.movies.join(", ")}</h4>
            <br />
          </div>
        )
      })}

    </div>
  );
};

export default Actors;
