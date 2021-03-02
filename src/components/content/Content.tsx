import React, { FC } from 'react';

import { Navigation } from './navigation/Navigation';
import { CountMovies } from './countMovies/CountMovies';
import { MovieCard } from './movieCard/MovieCard';

import { ContentContainer, MovieCards } from './Content.style';

export const Content: FC = () => (
  <ContentContainer>
    <Navigation />
    <CountMovies />
    <MovieCards>
      <MovieCard />
    </MovieCards>
  </ContentContainer>
);
