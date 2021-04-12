import React, { FC } from 'react';

import { MOVIES_FOUND_COUNT } from 'utils/constants';
import { MoviesDataProps } from 'baseTypes/BaseTypes.interface';

import { CountMoviesContainer, CountMoviesNumber } from './CountMovies.style';

export const CountMovies: FC<MoviesDataProps> = ({ moviesData }) => (
  <CountMoviesContainer>
    <CountMoviesNumber>{moviesData.length}</CountMoviesNumber>
    {MOVIES_FOUND_COUNT}
  </CountMoviesContainer>
);
