import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { ContentProps } from './Content.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { getMoviesDataSelector } from 'store/mainPage/selectors';
import { getMoviesDataRequest } from 'store/actions/actions';
import { Navigation } from './navigation/Navigation';
import { CountMovies } from './countMovies/CountMovies';
import { MovieCard } from './movieCard/MovieCard';

// del
import { navGenreData, navSortData } from 'utils/navData';
import {
  editFormPlaceholderData,
  editMovieSelectData,
} from 'utils/editMovieData';

import { ContentContainer, MovieCards } from './Content.style';

export const ContentComponent: FC<ContentProps> = ({
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
          addFormPlaceholderData={editFormPlaceholderData}
          addMovieSelectData={editMovieSelectData}
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
