import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';
import { AppState } from 'baseTypes/BaseTypes.interface';

export const initialState: AppState = {
  mainPage: {
    moviesError: '',
    moviesData: [],
    movieData: {},
    movieError: '',
    movieForm: {},
    totalAmount: 0,
    filter: 'all',
    sortBy: 'release date',
    sortDescending: true,
    searchValue: '',
  },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
