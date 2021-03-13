import React, { FC } from 'react';

import { MovieCardInfoProps } from './MovieCardInfo.interface';

import {
  MovieCardDescr,
  MovieCardInfoText,
  MovieCardRelease,
  MovieCardTitle,
  MovieCardGenres,
} from './MovieCardInfo.styled';

export const MovieCardInfo: FC<MovieCardInfoProps> = ({
  title,
  genres,
  release_date,
}) => {
  const genresStr = genres && genres.join(', ');
  const releaseDate = release_date && release_date.split('-')[0];

  return (
    <MovieCardInfoText>
      <MovieCardDescr>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardGenres>{genresStr}</MovieCardGenres>
      </MovieCardDescr>
      <MovieCardRelease>{releaseDate}</MovieCardRelease>
    </MovieCardInfoText>
  );
};
