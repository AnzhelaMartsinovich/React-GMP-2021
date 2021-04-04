import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { Header } from './header/Header';
import { TopContentProps } from './TopContent.interface';
import {
  PlaceholderData,
  MovieSelectData,
  MoviesDataProps,
  AppState,
} from 'baseTypes/BaseTypes.interface';
import { AboutMovieItem } from './aboutMovieItem/AboutMovieItem';
import { SearchPart } from './searchPart/SearchPart';
import { addFormPlaceholderData, addMovieSelectData } from 'utils/addMovieData';
import { getMovieDataRequest } from 'store/actions/actions';
import { getMoviesDataSelector } from 'store/mainPage/selectors';

import { TopContentContainer } from './TopContent.style';

export const TopContentComponent: FC<TopContentProps> = ({
  movies,
  movieId,
  hideMovie,
}) => {
  const data = movieId && movies?.find((item) => item.id === movieId);

  return (
    <TopContentContainer>
      <Header
        addFormPlaceholderData={addFormPlaceholderData}
        addMovieSelectData={addMovieSelectData}
        data={data}
        hideMovie={hideMovie}
      />
      {data ? <AboutMovieItem data={data} /> : <SearchPart />}
    </TopContentContainer>
  );
};

export const TopContent = connect(
  (state: AppState, ownProps) => {
    const { moviesData } = state.mainPage;
    return {
      movies: getMoviesDataSelector(state),
    };
  },
  { getMovieDataRequest }
)(TopContentComponent);
