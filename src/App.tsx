import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage } from 'pages/mainPage/MainPage';
import { ErrorBoundary } from './components/common/errorBoundary/ErrorBoundary';
import { NotFoundPage } from 'pages/notFoundPage/NotFoundPage';
import { NoMovieFound } from 'pages/noMovieFound/NoMovieFound';

import './App.css';

export const App: FC = () => (
  <Router>
    <ErrorBoundary>
      <div className='app'>
        <Switch>
          <Route path='/' exact>
            <NoMovieFound />
          </Route>
          <Route path='/search'>
            <MainPage />
          </Route>
          <Route path='/film/:slug'>
            <MainPage />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </ErrorBoundary>
  </Router>
);
