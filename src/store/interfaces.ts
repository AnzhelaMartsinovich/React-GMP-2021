import * as actionTypes from './actionTypes';
import { Movie } from 'baseTypes/BaseTypes.interface';

export interface RequestMoviesStart {
  type: typeof actionTypes.REQUEST_MOVIES_START;
}

export interface RequestMoviesError {
  type: typeof actionTypes.REQUEST_MOVIES_ERROR;
  error: string;
}

export interface MoviesData {
  totalAmount: number;
  offset: number;
  limit: number;
  data: Movie[];
}
export interface SetTotalAmountToStore {
  type: typeof actionTypes.SET_TOTAL_AMOUNT_TO_STORE;
  totalAmount: MoviesData['totalAmount'];
}

export interface RecordMoviesDataToStore {
  type: typeof actionTypes.RECORD_MOVIES_DATA_TO_STORE;
  moviesData: MoviesData;
}

export interface RecordMoviesDataToStoreId {
  type: typeof actionTypes.RECORD_MOVIES_DATA_TO_STORE_ID;
  moviesData: MoviesData;
  id: number;
}

export interface RecordMovieDataToStore {
  type: typeof actionTypes.RECORD_MOVIE_DATA_TO_STORE;
  movieData: Movie;
}

export interface ResetMovieDataInStore {
  type: typeof actionTypes.RESET_MOVIE_DATA_IN_STORE;
  movieData: {};
}

export interface RequestMovieError {
  type: typeof actionTypes.REQUEST_MOVIE_ERROR;
  error: string;
}
export interface SetFlagForPreviewPhotoTrue {
  type: typeof actionTypes.SET_FLAG_FOR_PREVIEW_TRUE;
  previewFlag: boolean;
}

export interface SetFlagForPreviewPhotoFalse {
  type: typeof actionTypes.SET_FLAG_FOR_PREVIEW_FALSE;
  previewFlag: boolean;
}

export interface SaveSortValue {
  type: typeof actionTypes.SAVE_SORT_VALUE;
  value: string;
}

export interface SaveFilterValue {
  type: typeof actionTypes.SAVE_FILTER_VALUE;
  value: string;
}

export interface SaveSelectedMovie {
  type: typeof actionTypes.SAVE_SELECTED_MOVIE;
  movie: any;
}

export type MainPageActionsTypes =
  | RequestMoviesStart
  | RequestMoviesError
  | SetTotalAmountToStore
  | RecordMoviesDataToStore
  | RecordMovieDataToStore
  | RequestMovieError
  | RecordMoviesDataToStoreId
  | ResetMovieDataInStore
  | SetFlagForPreviewPhotoTrue
  | SetFlagForPreviewPhotoFalse
  | SaveSortValue
  | SaveFilterValue
  | SaveSelectedMovie;
