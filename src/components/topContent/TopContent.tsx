import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Header } from './header/Header';
import { TopContentProps } from './TopContent.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { AboutMovieItem } from './aboutMovieItem/AboutMovieItem';
import { SearchPart } from './searchPart/SearchPart';
import {
  getSortValueSelector,
  getFilterValueSelector,
  getMovieDataSelector,
} from 'store/mainPage/selectors';
import {
  getMoviesDataRequest,
  getMovieDataRequest,
} from 'store/actions/actions';

import { TopContentContainer } from './TopContent.style';

export const TopContentComponent: FC<TopContentProps> = ({
  movie,
  getMoviesDataRequest,
  getMovieDataRequest,
  slug,
  filterValue,
  sortValue,
}) => {
  return (
    <TopContentContainer>
      <Header slug={slug} />
      {slug ? (
        <AboutMovieItem
          data={movie}
          slug={slug}
          getMovieDataRequest={getMovieDataRequest}
        />
      ) : (
        <SearchPart
          getMoviesDataRequest={getMoviesDataRequest}
          filterValue={filterValue}
          sortValue={sortValue}
        />
      )}
    </TopContentContainer>
  );
};

export const TopContent = connect(
  (state: AppState) => ({
    movie: getMovieDataSelector(state),
    filterValue: getFilterValueSelector(state),
    sortValue: getSortValueSelector(state),
  }),
  {
    getMoviesDataRequest,
    getMovieDataRequest,
  }
)(TopContentComponent);
