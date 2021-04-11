import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Header } from './header/Header';
import { TopContentProps } from './TopContent.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { AboutMovieItem } from './aboutMovieItem/AboutMovieItem';
import { SearchPart } from './searchPart/SearchPart';
import { getMovieDataSelector, getPreviewFlag } from 'store/mainPage/selectors';

import { TopContentContainer } from './TopContent.style';

export const TopContentComponent: FC<TopContentProps> = ({
  movie,
  previewFlag,
}) => (
  <TopContentContainer>
    <Header data={movie} />
    {movie.id && previewFlag ? <AboutMovieItem data={movie} /> : <SearchPart />}
  </TopContentContainer>
);

export const TopContent = connect((state: AppState) => ({
  movie: getMovieDataSelector(state),
  previewFlag: getPreviewFlag(state),
}))(TopContentComponent);
