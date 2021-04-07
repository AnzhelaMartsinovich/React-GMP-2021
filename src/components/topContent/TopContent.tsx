import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Header } from './header/Header';
import { TopContentProps } from './TopContent.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { AboutMovieItem } from './aboutMovieItem/AboutMovieItem';
import { SearchPart } from './searchPart/SearchPart';
import { addFormPlaceholderData, addMovieSelectData } from 'utils/addMovieData';
import { getMovieDataRequest, resetMovieData } from 'store/actions/actions';
import { getMovieDataSelector } from 'store/mainPage/selectors';

import { TopContentContainer } from './TopContent.style';

export const TopContentComponent: FC<TopContentProps> = ({
  movie,
  resetMovieData,
}) => (
  <TopContentContainer>
    <Header
      addFormPlaceholderData={addFormPlaceholderData}
      addMovieSelectData={addMovieSelectData}
      data={movie}
      resetMovieData={resetMovieData}
    />
    {movie.id ? <AboutMovieItem data={movie} /> : <SearchPart />}
  </TopContentContainer>
);

export const TopContent = connect(
  (state: AppState) => ({
    movie: getMovieDataSelector(state),
  }),
  { getMovieDataRequest, resetMovieData }
)(TopContentComponent);
