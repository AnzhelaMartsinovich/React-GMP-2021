import React, { FC } from 'react';

import { MOVIES_FOUND_COUNT } from '../../../utils/constants';

import { CountMoviesContainer } from './CountMovies.style';

export const CountMovies: FC = () => (
  <CountMoviesContainer>{MOVIES_FOUND_COUNT}</CountMoviesContainer>
);
