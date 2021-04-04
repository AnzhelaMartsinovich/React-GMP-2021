import { createSelector } from 'reselect';
import { AppState, Movie } from 'baseTypes/BaseTypes.interface';

const getMoviesData = (state: AppState): Movie[] => state.mainPage.moviesData;
export const getMoviesDataSelector = createSelector(
  getMoviesData,
  (data) => data
);
