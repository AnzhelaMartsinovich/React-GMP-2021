import React, { FC, useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './appState';
import { TopContent } from './components/topContent/TopContent';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

import { navGenreData, navSortData } from './utils/navData';
import {
  addFormPlaceholderData,
  addMovieSelectData,
} from './utils/addMovieData';
import { ErrorBoundary } from './components/common/errorBoundary/ErrorBoundary';
import {
  editFormPlaceholderData,
  editMovieSelectData,
} from './utils/editMovieData';

import './App.css';

export const App: FC = () => {
  const [state, setState] = useState(null);
  const [movieId, setMovieId] = useState<number | undefined>(undefined);
  const onClickMovie = (id: number) => {
    setMovieId(id);
  };
  const hideMovie = () => {
    setMovieId(undefined);
  };

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/VarvaraZadnepriak/MoviesAPI.ReactJS/master/src/data/movies.json'
    )
      .then((res) => res.json())
      .then((data) => setState(data.slice(0, 20)));
  }, []);

  return (
    <Provider store={store}>
      <div className='app'>
        <ErrorBoundary>
          <TopContent
            addFormPlaceholderData={addFormPlaceholderData}
            addMovieSelectData={addMovieSelectData}
            moviesData={state}
            movieId={movieId}
            hideMovie={hideMovie}
          />
          <Content
            moviesData={state}
            navGenreData={navGenreData}
            navSortData={navSortData}
            addFormPlaceholderData={editFormPlaceholderData}
            addMovieSelectData={editMovieSelectData}
            onClickMovie={onClickMovie}
          />
          <Footer />
        </ErrorBoundary>
      </div>
    </Provider>
  );
};
