import React, { FC } from 'react';

import { MovieCardProps } from './MovieCard.interface';
import { MovieCardInfo } from './movieCardInfo/MovieCardInfo';

import {
  MovieCardContainer,
  MovieCardItem,
  MovieCardImg,
} from './MovieCard.style';

export const MovieCard: FC<MovieCardProps> = ({ moviesData }) => {
  return (
    <MovieCardContainer>
      {moviesData.map(({ id, poster_path, title, genres, release_date }) => (
        <MovieCardItem key={id}>
          <MovieCardImg src={poster_path} alt={title} />
          <MovieCardInfo
            title={title}
            genres={genres}
            release_date={release_date}
          />
        </MovieCardItem>
      ))}
    </MovieCardContainer>
  );
};
