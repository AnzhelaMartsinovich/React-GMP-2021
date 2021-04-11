import React, { FC } from 'react';

import { MOVIES_FOUND_COUNT } from 'utils/constants';
import { CountMoviesProps } from './CountMovies.interface';

import { CountMoviesContainer, CountMoviesNumber } from './CountMovies.style';

export const CountMovies: FC<CountMoviesProps> = ({ totalAmount }) => (
  <CountMoviesContainer>
    <CountMoviesNumber>{totalAmount}</CountMoviesNumber>
    {MOVIES_FOUND_COUNT}
  </CountMoviesContainer>
);
