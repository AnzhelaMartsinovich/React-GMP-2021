import React, { FC } from 'react';

import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

import { moviesData } from './utils/moviesData';
import { navGenreData, navSortData } from './utils/navData';

import './App.css';

export const App: FC = () => (
  <div className='app'>
    <Header />
    <Content
      moviesData={moviesData}
      navGenreData={navGenreData}
      navSortData={navSortData}
    />
    <Footer />
  </div>
);
