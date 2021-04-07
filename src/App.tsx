import React from 'react';
import { Provider } from 'react-redux';

import { store } from './appState';
import { TopContent } from './components/topContent/TopContent';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { ErrorBoundary } from './components/common/errorBoundary/ErrorBoundary';

import './App.css';

export const App: any = () => (
  <Provider store={store}>
    <div className='app'>
      <ErrorBoundary>
        <TopContent />
        <Content />
        <Footer />
      </ErrorBoundary>
    </div>
  </Provider>
);
