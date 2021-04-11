import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { ContentProps } from './Content.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import {
  getMoviesDataSelector,
  getTotalAmount,
} from 'store/mainPage/selectors';
import {
  getMoviesDataRequest,
  getMovieDataRequest,
} from 'store/actions/actions';
import { Navigation } from './navigation/Navigation';
import { CountMovies } from './countMovies/CountMovies';
import { MovieCard } from './movieCard/MovieCard';
import { navGenreData, navSortData } from 'utils/navData';

import { ContentContainer, MovieCards } from './Content.style';

export const ContentComponent: FC<ContentProps> = ({
  getMoviesDataRequest,
  getMovieDataRequest,
  movies,
  totalAmount,
}) => {
  useEffect(() => {
    getMoviesDataRequest();
  }, [getMoviesDataRequest]);

  return (
    <ContentContainer>
      <Navigation navGenreData={navGenreData} navSortData={navSortData} />
      <CountMovies totalAmount={totalAmount} />
      <MovieCards>
        <MovieCard
          moviesData={movies}
          getMovieDataRequest={getMovieDataRequest}
        />
      </MovieCards>
    </ContentContainer>
  );
};

export const Content = connect(
  (state: AppState) => ({
    movies: getMoviesDataSelector(state),
    totalAmount: getTotalAmount(state),
  }),
  { getMoviesDataRequest, getMovieDataRequest }
)(ContentComponent);
