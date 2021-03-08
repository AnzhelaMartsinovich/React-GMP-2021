import React, { FC } from 'react';

import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

import { moviesData } from './utils/moviesData';
import { navGenreData, navSortData } from './utils/navData';
import {
  addFormPlaceholderData,
  addMovieSelectData,
} from './utils/addMovieData';
import { ErrorBoundary } from './components/common/errorBoundary/ErrorBoundary';

import './App.css';

export const App: FC = () => (
  <div className='app'>
    <ErrorBoundary>
      <Header
        addFormPlaceholderData={addFormPlaceholderData}
        addMovieSelectData={addMovieSelectData}
      />
      <Content
        moviesData={moviesData}
        navGenreData={navGenreData}
        navSortData={navSortData}
      />
      <Footer />
    </ErrorBoundary>
  </div>
);
