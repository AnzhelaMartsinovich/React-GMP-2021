import { createSelector } from 'reselect';
import { AppState, Movie } from 'baseTypes/BaseTypes.interface';

const getMainPage = (state: AppState): any => state.mainPage;
export const getTotalAmount = createSelector(
  getMainPage,
  (data) => data.totalAmount
);
export const getPreviewFlag = createSelector(
  getMainPage,
  (data) => data.previewFlag
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
