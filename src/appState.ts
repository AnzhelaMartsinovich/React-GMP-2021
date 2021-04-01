import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

export interface initialStateProps {
  addMovieSelectData: {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: never[];
    runtime: 0;
  };
}

export const initialState: initialStateProps = {
  addMovieSelectData: {
    id: 0,
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    genres: [],
    runtime: 0,
  },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);
