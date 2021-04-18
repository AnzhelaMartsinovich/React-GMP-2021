import { createSelector } from 'reselect';
import { AppState, Movie, MainPageState } from 'baseTypes/BaseTypes.interface';

const getMainPage = (state: AppState): MainPageState => state.mainPage;
export const getTotalAmount = createSelector(
  getMainPage,
  (data) => data.totalAmount
);

const getMoviesData = (state: AppState): Movie[] => state.mainPage.moviesData;
export const getMoviesDataSelector = createSelector(
  getMoviesData,
  (data) => data
);

const getMovieData = (state: AppState): any => state.mainPage.movieData;
export const getMovieDataSelector = createSelector(
  getMovieData,
  (data) => data
);
export const getMovieDataId = createSelector(getMovieData, (data) => data.id);

const getMovieForm = (state: AppState) => state.mainPage.movieForm;
export const getMovieFormSelector = createSelector(
  getMovieForm,
  (value) => value
);

const getFilterValue = (state: AppState): string => state.mainPage.filter;
export const getFilterValueSelector = createSelector(
  getFilterValue,
  (value) => value
);

const getSortValue = (state: AppState): string => state.mainPage.sortBy;
export const getSortValueSelector = createSelector(
  getSortValue,
  (value) => value
);

const sortDescendingValue = (state: AppState): boolean =>
  state.mainPage.sortDescending;
export const sortDescValueSelector = createSelector(
  sortDescendingValue,
  (value) => value
);
