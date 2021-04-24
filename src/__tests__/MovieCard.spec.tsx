import React from 'react';
import { render } from '@testing-library/react';

import { MovieCard } from '../components/content/movieCard/MovieCard';
import { MoviesDataProps } from 'baseTypes/BaseTypes.interface';

const moviesData: MoviesDataProps = {
  moviesData: [
    {
      id: 0,
      title: '',
      tagline: '',
      vote_average: 0,
      vote_count: 0,
      release_date: '',
      poster_path: '',
      overview: '',
      budget: 0,
      revenue: 0,
      genres: [''],
      runtime: 0,
    },
  ],
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
