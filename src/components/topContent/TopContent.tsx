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
  searchValueSelector,
} from 'store/mainPage/selectors';
import {
  getMoviesDataRequest,
  getMovieDataRequest,
  setSearchValue,
} from 'store/actions/actions';

import { TopContentContainer } from './TopContent.style';

export const TopContentComponent: FC<TopContentProps> = ({
  movie,
  getMovieDataRequest,
  setSearchValue,
  slug,
  searchValue,
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
        <SearchPart setSearchValue={setSearchValue} searchValue={searchValue} />
      )}
    </TopContentContainer>
  );
};

export const TopContent = connect(
  (state: AppState) => ({
    movie: getMovieDataSelector(state),
    filterValue: getFilterValueSelector(state),
    sortValue: getSortValueSelector(state),
    searchValue: searchValueSelector(state),
  }),
  {
    getMoviesDataRequest,
    getMovieDataRequest,
    setSearchValue,
  }
)(TopContentComponent);
