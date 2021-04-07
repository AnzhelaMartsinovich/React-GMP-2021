import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionTypes from '../actionTypes';
import * as interfaces from '../interfaces';

import { AppState, Movie } from 'baseTypes/BaseTypes.interface';
import { getMovies, getMovie } from '../mainPage/services';

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

export const getMoviesDataRequest = () => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
): Promise<void> => {
  const searchParams = {
    limit: 20,
  };

  return getMovies(searchParams)
    .then((response) => {
      dispatch(recordMoviesDataToStore(response.data));
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
  return getMovie(id).then((response) => {
    dispatch(recordMovieDataToStore(response.data));
  });
  // .catch((error) => {
  //   dispatch(requestMovieError(error));
  // });
};

export const resetMovieData = (
  movieData: Movie
): interfaces.ResetMovieDataInStore => ({
  type: actionTypes.RESET_MOVIE_DATA_IN_STORE,
  movieData,
});
