import { createSelector } from 'reselect';
import { AppState, Movie } from 'baseTypes/BaseTypes.interface';

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

const getMovieForm = (state: AppState) => state.mainPage.movieForm;
export const getMovieFormSelector = createSelector(
  getMovieForm,
  (value) => value
);
