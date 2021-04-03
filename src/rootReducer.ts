import { combineReducers } from 'redux';

import { moviesReducer } from './store/reducers/movieReducer';

export const rootReducer = combineReducers({ moviesReducer });
