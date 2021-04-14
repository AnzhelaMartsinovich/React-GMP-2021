import * as actionTypes from '../actionTypes';
import { MainPageActionsTypes } from '../interfaces';
import { MainPageState } from 'baseTypes/BaseTypes.interface';

export const mainPageInitialState: MainPageState = {
  moviesLoading: false,
  moviesError: '',
  moviesData: [],
  movieData: {},
  movieError: '',
  movieForm: {},
  totalAmount: 0,
  previewFlag: false,
  filter: 'all',
  sortBy: 'release date',
  sortDescending: true,
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
    case actionTypes.SET_TOTAL_AMOUNT_TO_STORE: {
      return {
        ...state,
        totalAmount: action.totalAmount,
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
      };
    }
    case actionTypes.RESET_MOVIE_DATA_IN_STORE: {
      return {
        ...state,
        movieData: (action.movieData = mainPageInitialState.movieData),
      };
    }
    case actionTypes.REQUEST_MOVIE_ERROR: {
      return {
        ...state,
        movieError: action.error,
      };
    }
    case actionTypes.SET_FLAG_FOR_PREVIEW_TRUE: {
      return {
        ...state,
        previewFlag: true,
      };
    }
    case actionTypes.SET_FLAG_FOR_PREVIEW_FALSE: {
      return {
        ...state,
        previewFlag: false,
      };
    }
    case actionTypes.SAVE_FILTER_VALUE: {
      return {
        ...state,
        filter: action.value,
      };
    }
    case actionTypes.SAVE_SORT_VALUE: {
      return {
        ...state,
        sortBy: action.value,
      };
    }
    default: {
      return state;
    }
  }
};
