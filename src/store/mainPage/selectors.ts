import { createSelector } from 'reselect';
import { AppState, MainPageState } from 'baseTypes/BaseTypes.interface';

const getMainPage = (state: AppState): MainPageState => state.mainPage;
export const getTotalAmountSelector = createSelector(
  getMainPage,
  (data) => data.totalAmount
);
export const getMoviesDataSelector = createSelector(
  getMainPage,
  (data) => data.moviesData
);
export const getMovieFormSelector = createSelector(
  getMainPage,
  (value) => value.movieForm
);
export const getFilterValueSelector = createSelector(
  getMainPage,
  (value) => value.filter
);
export const getSortValueSelector = createSelector(
  getMainPage,
  (value) => value.sortBy
);
export const sortDescValueSelector = createSelector(
  getMainPage,
  (value) => value.sortDescending
);
export const searchValueSelector = createSelector(
  getMainPage,
  (value) => value.searchValue
);

const getMovieData = (state: AppState): any => state.mainPage.movieData;
export const getMovieDataSelector = createSelector(
  getMovieData,
  (data) => data
);
export const getMovieDataIdSelector = createSelector(
  getMovieData,
  (data) => data.id
);
