import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ThunkDispatch } from 'redux-thunk';

import * as types from '../../actionTypes';
import { store } from 'appState';
import { mainPageState, movieData, moviesData } from '../../mockData';
import { MOVIES_URL } from 'endpoints';
import {
  getMoviesDataRequest,
  getMovieDataRequest,
  postMovieDataRequest,
  deleteMovieRequest,
  putMovieRequest,
  saveSelectedMovie,
  requestMovieError,
  requestMoviesError,
} from '../actions';

describe('actions', () => {
  let fakeAxios: MockAdapter;
  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
  });
  const dispatch: ThunkDispatch<any, any, any> = store.dispatch;

  it('should get movies data', async () => {
    fakeAxios.onGet(MOVIES_URL).reply(200, moviesData);
    const recordMoviesDataToStore = jest.fn();
    const setTotalAmountToStore = jest.fn();
    const setSearchValue = jest.fn();

    try {
      await dispatch(getMoviesDataRequest());
    } catch (e) {
      await dispatch(requestMoviesError(mainPageState.moviesError));
    }

    setTimeout(() => {
      expect(recordMoviesDataToStore).toHaveBeenCalledTimes(1);
      expect(setTotalAmountToStore).toHaveBeenCalledTimes(1);
      expect(setSearchValue).toHaveBeenCalledTimes(1);
      expect(recordMoviesDataToStore).toHaveBeenCalledWith(moviesData.data);
      expect(setTotalAmountToStore).toHaveBeenCalledWith(
        moviesData.totalAmount
      );
    });
  });

  it('should get movie data', async () => {
    fakeAxios.onGet(`${MOVIES_URL}/${movieData.id}`).reply(200, movieData);
    const recordMovieDataToStore = jest.fn();

    try {
      await dispatch(getMovieDataRequest(movieData.id));
    } catch (e) {
      await dispatch(requestMovieError(mainPageState.movieError));
    }

    setTimeout(() => {
      expect(recordMovieDataToStore).toHaveBeenCalledTimes(1);
      expect(recordMovieDataToStore).toHaveBeenCalledWith(movieData);
    });
  });

  it('should post movie data', async () => {
    fakeAxios.onPost(`${MOVIES_URL}/${movieData.id}`).reply(200, movieData);
    const getMoviesDataRequest = jest.fn();

    try {
      await dispatch(postMovieDataRequest(movieData));
    } catch (e) {}

    setTimeout(() => {
      expect(getMoviesDataRequest).toHaveBeenCalledTimes(1);
    });
  });

  it('should delete movie', async () => {
    fakeAxios
      .onDelete(`${MOVIES_URL}/${movieData.id}`)
      .reply(200, movieData.id);
    const getMoviesDataRequest = jest.fn();

    try {
      await dispatch(deleteMovieRequest(movieData.id));
    } catch (e) {}

    setTimeout(() => {
      expect(getMoviesDataRequest).toHaveBeenCalledTimes(1);
    });
  });

  it('should put movie form', async () => {
    fakeAxios.onPut(`${MOVIES_URL}/${movieData.id}`).reply(200, movieData.id);
    const getMoviesDataRequest = jest.fn();
    const saveSelectedMovie = jest.fn();

    try {
      await dispatch(putMovieRequest(movieData.id));
    } catch (e) {}

    setTimeout(() => {
      expect(getMoviesDataRequest).toHaveBeenCalledTimes(1);
      expect(saveSelectedMovie).toHaveBeenCalledTimes(1);
      expect(saveSelectedMovie).toHaveBeenCalledWith(movieData);
    });
  });

  it('should save selected movie', () => {
    const movie = movieData;
    const expectedAction = {
      type: types.SAVE_SELECTED_MOVIE,
      movie,
    };
    expect(saveSelectedMovie(movie)).toEqual(expectedAction);
  });
});
