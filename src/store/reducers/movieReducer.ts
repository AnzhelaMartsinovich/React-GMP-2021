import { TRAIN_MOVIE_ACTION } from '../actionTypes';
import { MovieActionsTypes } from '../interfaces';

export const moviesReducer = (state = 0, action: MovieActionsTypes) => {
  switch (action.type) {
    case TRAIN_MOVIE_ACTION:
      return state + 1;
    default:
      return state;
  }
};
