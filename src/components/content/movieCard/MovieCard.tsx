import React, { FC } from 'react';

import { MovieCardProps } from './MovieCard.interface';
import { MovieCardItem } from './movieCardItem/MovieCardItem';

import { MovieCardContainer } from './MovieCard.style';
import {
  MoviesDataProps,
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';

export const MovieCard: FC<
  MovieCardProps & MoviesDataProps & PlaceholderData & MovieSelectData
> = ({
  moviesData,
  addFormPlaceholderData,
  addMovieSelectData,
  onClickMovie,
}) => (
  <MovieCardContainer>
    {moviesData?.map(({ id, poster_path, title, genres, release_date }) => (
      <MovieCardItem
        key={id}
        id={id}
        poster_path={poster_path}
        title={title}
        genres={genres}
        release_date={release_date}
        addFormPlaceholderData={addFormPlaceholderData}
        addMovieSelectData={addMovieSelectData}
        onClickMovie={onClickMovie}
      />
    ))}
  </MovieCardContainer>
);
