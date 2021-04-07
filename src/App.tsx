import React, { FC } from 'react';

import { TopContent } from './components/topContent/TopContent';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { ErrorBoundary } from './components/common/errorBoundary/ErrorBoundary';

import './App.css';

export const App: FC = () => (
  <div className='app'>
    <ErrorBoundary>
      <TopContent />
      <Content />
      <Footer />
    </ErrorBoundary>
  </div>
);
