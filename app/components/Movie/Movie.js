import React from 'react';
import { object } from 'prop-types';

const Movie = ({ data }) => {
  return (
    <div className='movie'>
      <img src={`${data.poster}`} />
    </div>
  );
};

export default Movie;
