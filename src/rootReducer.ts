import { combineReducers } from 'redux';

import { mainPageReducer } from './store/reducers/reducer';

export const rootReducer = combineReducers({ mainPage: mainPageReducer });
