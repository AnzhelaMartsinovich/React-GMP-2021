import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionTypes from '../actionTypes';
import * as interfaces from '../interfaces';

import { AppState, Movie } from 'baseTypes/BaseTypes.interface';
import {
  getMovies,
  getMovie,
  postMovie,
  delMovie,
  editMovie,
} from '../mainPage/services';
import { getMovieDataSelector } from '../mainPage/selectors';
import { prepareMovieForRequest } from 'commonUtils/prepareMovieForRequest';
import { prepareParamsObject } from 'commonUtils/utils';

export const requestMoviesError = (
  error: string
): interfaces.RequestMoviesError => ({
  type: actionTypes.REQUEST_MOVIES_ERROR,
  error,
});

export const recordMoviesDataToStore = (
  moviesData: interfaces.MoviesData
): interfaces.RecordMoviesDataToStore => ({
  type: actionTypes.RECORD_MOVIES_DATA_TO_STORE,
  moviesData,
});

export const setTotalAmountToStore = (
  totalAmount: number
): interfaces.SetTotalAmountToStore => ({
  type: actionTypes.SET_TOTAL_AMOUNT_TO_STORE,
  totalAmount,
});

export const getMoviesDataRequest = (
  params?: Record<string, string | number | boolean> | undefined
) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
  getState: () => AppState
): Promise<void> => {
  const navBarParams = prepareParamsObject(getState().mainPage);

  const searchParams = {
    ...navBarParams,
    ...params,
  };

  return getMovies(searchParams)
    .then((response) => {
      dispatch(recordMoviesDataToStore(response.data));
      dispatch(setTotalAmountToStore(response.data.totalAmount));
    })
    .catch((error) => {
      dispatch(requestMoviesError(error));
    });
};

export const requestMovieError = (
  error: string
): interfaces.RequestMovieError => ({
  type: actionTypes.REQUEST_MOVIE_ERROR,
  error,
});

export const recordMovieDataToStore = (
  movieData: Movie
): interfaces.RecordMovieDataToStore => ({
  type: actionTypes.RECORD_MOVIE_DATA_TO_STORE,
  movieData,
});

export const getMovieDataRequest = (id: number) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> => {
  return getMovie(id)
    .then((response) => {
      dispatch(recordMovieDataToStore(response.data));
    })
    .catch((error) => {
      dispatch(requestMovieError(error));
    });
};

export const resetMovieData = (
  movieData: Movie
): interfaces.ResetMovieDataInStore => ({
  type: actionTypes.RESET_MOVIE_DATA_IN_STORE,
  movieData,
});

export const postMovieDataRequest = (movieData: any) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> => {
  const movie = {
    vote_average: 0,
    vote_count: 9,
    budget: 1000,
    revenue: 0,
    ...movieData,
  };

  return postMovie(movie).then(() => {
    dispatch(getMoviesDataRequest());
  });
};

export const deleteMovieRequest = (id: number) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> =>
  delMovie(id).then(() => {
    dispatch(getMoviesDataRequest());
  });

export const putMovieRequest = (movieForm: any) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
  getState: () => AppState
): Promise<void> => {
  const movie = getMovieDataSelector(getState());
  const resultMovie = prepareMovieForRequest(movie, movieForm);

  return editMovie(resultMovie).then((response) => {
    dispatch(saveSelectedMovie(response.data));
    dispatch(getMoviesDataRequest());
  });
};

export const saveSortValue = (value: string): interfaces.SaveSortValue => ({
  type: actionTypes.SAVE_SORT_VALUE,
  value,
});

export const saveFilterValue = (value: string): interfaces.SaveFilterValue => ({
  type: actionTypes.SAVE_FILTER_VALUE,
  value,
});

export const saveSelectedMovie = (
  movie: Movie
): interfaces.SaveSelectedMovie => ({
  type: actionTypes.SAVE_SELECTED_MOVIE,
  movie,
});
