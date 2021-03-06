import React, { FC } from 'react';

import { MovieCardProps } from './MovieCard.interface';
import { MovieCardItem } from './movieCardItem/MovieCardItem';

import { MovieCardContainer } from './MovieCard.style';

export const MovieCard: FC<MovieCardProps> = ({
  moviesData,
  addFormPlaceholderData,
  addMovieSelectData,
}) => (
  <MovieCardContainer>
    {moviesData.map(({ id, poster_path, title, genres, release_date }) => (
      <MovieCardItem
        key={id}
        id={id}
        poster_path={poster_path}
        title={title}
        genres={genres}
        release_date={release_date}
        addFormPlaceholderData={addFormPlaceholderData}
        addMovieSelectData={addMovieSelectData}
      />
    ))}
  </MovieCardContainer>
);
