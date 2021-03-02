import React from 'react';

import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

import './App.css';

export const App = () => (
  <div className='app'>
    <Header />
    <Content />
    <Footer />
  </div>
);
