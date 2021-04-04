import React, { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './appState';
import { TopContent } from './components/topContent/TopContent';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

import { ErrorBoundary } from './components/common/errorBoundary/ErrorBoundary';

import './App.css';

export const App: any = () => {
  const [movieId, setMovieId] = useState<number | undefined>(undefined);

  const onClickMovie = (id: number) => {
    setMovieId(id);
  };
  const hideMovie = () => {
    setMovieId(undefined);
  };

  return (
    <Provider store={store}>
      <div className='app'>
        <ErrorBoundary>
          <TopContent movieId={movieId} hideMovie={hideMovie} />
          <Content onClickMovie={onClickMovie} />
          <Footer />
        </ErrorBoundary>
      </div>
    </Provider>
  );
};
