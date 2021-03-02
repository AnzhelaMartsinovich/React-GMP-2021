import React, { FC } from 'react';

import { ContentProps } from './Content.interface';
import { Navigation } from './navigation/Navigation';
import { CountMovies } from './countMovies/CountMovies';
import { MovieCard } from './movieCard/MovieCard';

import { ContentContainer, MovieCards } from './Content.style';

export const Content: FC<ContentProps> = ({
  moviesData,
  navGenreData,
  navSortData,
}) => (
  <ContentContainer>
    <Navigation navGenreData={navGenreData} navSortData={navSortData} />
    <CountMovies />
    <MovieCards>
      <MovieCard moviesData={moviesData} />
    </MovieCards>
  </ContentContainer>
);
