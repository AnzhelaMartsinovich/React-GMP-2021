import * as actionTypes from '../actionTypes';
import { MainPageActionsTypes } from '../interfaces';
import { MainPageState } from 'baseTypes/BaseTypes.interface';

export const mainPageInitialState: MainPageState = {
  moviesLoading: false,
  moviesError: '',
  moviesData: [],
  movieData: {},
};

export const mainPageReducer = (
  state = mainPageInitialState,
  action: MainPageActionsTypes
): MainPageState => {
  switch (action.type) {
    case actionTypes.REQUEST_MOVIES_START: {
      return {
        ...state,
        moviesLoading: true,
      };
    }
    case actionTypes.REQUEST_MOVIES_ERROR: {
      return {
        ...state,
        moviesError: action.error,
        moviesLoading: false,
      };
    }
    case actionTypes.RECORD_MOVIES_DATA_TO_STORE: {
      return {
        ...state,
        moviesData: action.moviesData.data,
        moviesLoading: false,
      };
    }
    case actionTypes.RECORD_MOVIE_DATA_TO_STORE: {
      return {
        ...state,
        movieData: action.movieData,
        // movieLoading: false,
      };
    }
    case actionTypes.RESET_MOVIE_DATA_IN_STORE: {
      return {
        ...state,
        movieData: (action.movieData = mainPageInitialState.movieData),
        // movieLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
