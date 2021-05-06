import React from 'react';
import { render } from '@testing-library/react';

import { MovieCard } from '../MovieCard';
import { MoviesDataProps } from 'baseTypes/BaseTypes.interface';
import { mockMovieData } from 'baseTypes/mockData';

const moviesData: MoviesDataProps = {
  moviesData: [mockMovieData],
  getMovieDataRequest: jest.fn(),
};

describe('MovieCard tests', () => {
  it('MovieCard renders correctly', () => {
    const movieCard = render(
      <MovieCard
        moviesData={moviesData.moviesData}
        getMovieDataRequest={moviesData.getMovieDataRequest}
      />
    );
    expect(movieCard).toMatchSnapshot();
  });
});
