import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { ContentProps } from './Content.interface';
import {
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { getMoviesDataSelector } from 'store/mainPage/selectors';
import { getMoviesDataRequest } from 'store/actions/actions';
import { Navigation } from './navigation/Navigation';
import { CountMovies } from './countMovies/CountMovies';
import { MovieCard } from './movieCard/MovieCard';

import { ContentContainer, MovieCards } from './Content.style';

export const ContentComponent: FC<
  ContentProps & PlaceholderData & MovieSelectData
> = ({
  navGenreData,
  navSortData,
  addFormPlaceholderData,
  addMovieSelectData,
  onClickMovie,
  getMoviesDataRequest,
  movies,
}) => {
  useEffect(() => {
    getMoviesDataRequest();
  }, [getMoviesDataRequest]);

  return (
    <ContentContainer>
      <Navigation navGenreData={navGenreData} navSortData={navSortData} />
      <CountMovies moviesData={movies} />
      <MovieCards>
        <MovieCard
          moviesData={movies}
          addFormPlaceholderData={addFormPlaceholderData}
          addMovieSelectData={addMovieSelectData}
          onClickMovie={onClickMovie}
        />
      </MovieCards>
    </ContentContainer>
  );
};

export const Content = connect(
  (state: AppState) => ({
    movies: getMoviesDataSelector(state),
  }),
  { getMoviesDataRequest }
)(ContentComponent);
