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
  addFormPlaceholderData,
  addMovieSelectData,
}) => (
  <ContentContainer>
    <Navigation navGenreData={navGenreData} navSortData={navSortData} />
    <CountMovies moviesData={moviesData} />
    <MovieCards>
      <MovieCard
        moviesData={moviesData}
        addFormPlaceholderData={addFormPlaceholderData}
        addMovieSelectData={addMovieSelectData}
      />
    </MovieCards>
  </ContentContainer>
);
