import React, { FC } from 'react';

import { MovieCardInfoProps } from './MovieCardInfo.interface';

import { MovieCardDescr, MovieCardInfoText } from './MovieCardInfo.styled';
import {
  MovieCardRelease,
  MovieCardTitle,
  MovieCardGenres,
} from '../../../../common/movie/MovieComponents.style';

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
