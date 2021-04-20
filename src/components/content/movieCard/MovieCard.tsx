import React, { FC } from 'react';

import { MovieCardItem } from './movieCardItem/MovieCardItem';
import { MoviesDataProps } from 'baseTypes/BaseTypes.interface';

import { MovieCardContainer } from './MovieCard.style';

export const MovieCard: FC<MoviesDataProps> = ({
  moviesData,
  getMovieDataRequest,
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
        getMovieDataRequest={getMovieDataRequest}
      />
    ))}
  </MovieCardContainer>
);
