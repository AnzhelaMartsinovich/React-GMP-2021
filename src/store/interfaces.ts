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

export interface RecordMoviesDataToStore {
  type: typeof actionTypes.RECORD_MOVIES_DATA_TO_STORE;
  moviesData: MoviesData;
}

export type MainPageActionsTypes =
  | RequestMoviesStart
  | RequestMoviesError
  | RecordMoviesDataToStore;
