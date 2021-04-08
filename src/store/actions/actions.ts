import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionTypes from '../actionTypes';
import * as interfaces from '../interfaces';

import { AppState, Movie } from 'baseTypes/BaseTypes.interface';
import { getMovies, getMovie, postMovie } from '../mainPage/services';
import { getMovieFormSelector } from '../mainPage/selectors';

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

export const setFormTitle = (title: string): interfaces.SetFormTitle => ({
  type: actionTypes.SET_FORM_TITLE,
  title,
});

export const setFormDate = (date: string): interfaces.SetFormDate => ({
  type: actionTypes.SET_FORM_DATE,
  date,
});

export const setFormUrl = (url: string): interfaces.SetFormUrl => ({
  type: actionTypes.SET_FORM_URL,
  url,
});

export const setFormGenres = (genres: string[]): interfaces.SetFormGenres => ({
  type: actionTypes.SET_FORM_GENRES,
  genres,
});

export const setFormOverview = (
  overview: string
): interfaces.SetFormOverview => ({
  type: actionTypes.SET_FORM_OVERVIEW,
  overview,
});

export const setFormRuntime = (runtime: any): interfaces.SetFormRuntime => ({
  type: actionTypes.SET_FORM_RUNTIME,
  runtime,
});

export const resetMovieForm = (): interfaces.ResetMovieForm => ({
  type: actionTypes.RESET_MOVIE_FORM,
});

export const postMovieDataRequest = () => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
  getState: () => AppState
): Promise<void> => {
  const movieForm = getMovieFormSelector(getState());
  const movie = {
    vote_average: 0,
    vote_count: 9,
    budget: 0,
    revenue: 0,
    ...movieForm,
  };

  return postMovie(movie).then(() => {
    dispatch(getMoviesDataRequest());
  });
};
