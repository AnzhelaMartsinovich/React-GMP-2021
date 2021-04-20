import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { ContentProps } from './Content.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import {
  getFilterValueSelector,
  getMoviesDataSelector,
  getSortValueSelector,
  getTotalAmount,
} from 'store/mainPage/selectors';
import {
  getMoviesDataRequest,
  saveSortValue,
  saveFilterValue,
} from 'store/actions/actions';
import { Navigation } from './navigation/Navigation';
import { CountMovies } from './countMovies/CountMovies';
import { MovieCard } from './movieCard/MovieCard';
import { getUrlSearchParams, useQuery } from 'commonUtils/queryParams';

import { ContentContainer, MovieCards } from './Content.style';

export const ContentComponent: FC<ContentProps> = ({
  getMoviesDataRequest,
  movies,
  totalAmount,
  saveSortValue,
  saveFilterValue,
  filterValue,
  sortValue,
}) => {
  const query = useQuery();
  useEffect(() => {
    const searchParams = getUrlSearchParams(query);
    getMoviesDataRequest(searchParams);
  }, [getMoviesDataRequest, filterValue, sortValue, query]);

  return (
    <ContentContainer>
      <Navigation
        saveSortValue={saveSortValue}
        saveFilterValue={saveFilterValue}
      />
      <CountMovies totalAmount={totalAmount} />
      <MovieCards>
        <MovieCard moviesData={movies} />
      </MovieCards>
    </ContentContainer>
  );
};

export const Content = connect(
  (state: AppState) => ({
    movies: getMoviesDataSelector(state),
    totalAmount: getTotalAmount(state),
    filterValue: getFilterValueSelector(state),
    sortValue: getSortValueSelector(state),
  }),
  { getMoviesDataRequest, saveSortValue, saveFilterValue }
)(ContentComponent);
