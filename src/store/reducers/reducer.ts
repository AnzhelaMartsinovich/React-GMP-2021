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
    case actionTypes.SET_FORM_TITLE: {
      return {
        ...state,
        movieForm: { ...state.movieForm, title: action.title },
      };
    }
    case actionTypes.SET_FORM_DATE: {
      return {
        ...state,
        movieForm: { ...state.movieForm, release_date: action.date },
      };
    }
    case actionTypes.SET_FORM_URL: {
      return {
        ...state,
        movieForm: { ...state.movieForm, poster_path: action.url },
      };
    }
    case actionTypes.SET_FORM_GENRES: {
      return {
        ...state,
        movieForm: { ...state.movieForm, genres: action.genres },
      };
    }
    case actionTypes.SET_FORM_OVERVIEW: {
      return {
        ...state,
        movieForm: { ...state.movieForm, overview: action.overview },
      };
    }
    case actionTypes.SET_FORM_RUNTIME: {
      return {
        ...state,
        movieForm: { ...state.movieForm, runtime: action.runtime },
      };
    }
    case actionTypes.RESET_MOVIE_FORM: {
      return {
        ...state,
        movieForm: {},
      };
    }
    default: {
      return state;
    }
  }
};
