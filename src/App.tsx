import React, { FC, useState } from 'react';

import { TopContent } from './components/topContent/TopContent';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

import { moviesData } from './utils/moviesData';
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
  const [movieId, setMovieId] = useState(0);
  const onClickMovie = (id: number) => {
    setMovieId(id);
  };

  return (
    <div className='app'>
      <ErrorBoundary>
        <TopContent
          addFormPlaceholderData={addFormPlaceholderData}
          addMovieSelectData={addMovieSelectData}
          moviesData={moviesData}
          movieId={movieId}
        />
        {/* <Header
          addFormPlaceholderData={addFormPlaceholderData}
          addMovieSelectData={addMovieSelectData}
          moviesData={moviesData}
          movieId={movieId}
        /> */}
        <Content
          moviesData={moviesData}
          navGenreData={navGenreData}
          navSortData={navSortData}
          addFormPlaceholderData={editFormPlaceholderData}
          addMovieSelectData={editMovieSelectData}
          onClickMovie={onClickMovie}
        />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};
