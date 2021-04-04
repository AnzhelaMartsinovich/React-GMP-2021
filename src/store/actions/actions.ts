import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionTypes from '../actionTypes';
import * as interfaces from '../interfaces';

import { AppState } from 'baseTypes/BaseTypes.interface';
import { getMovies } from '../mainPage/services';

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

export const getMoviesDataRequest = (
  params?: Record<string, string | number | boolean> | undefined
) => (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
  getState: () => AppState
): Promise<void> => {
  const searchParams = {
    limit: 20,
    // ...params,
  };

  return getMovies(searchParams)
    .then((response) => {
      dispatch(recordMoviesDataToStore(response.data));
    })
    .catch((error) => {
      dispatch(requestMoviesError(error));
    });
};
