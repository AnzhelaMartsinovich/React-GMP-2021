import React, { FC } from 'react';

import { moviesData } from '../../../utils/moviesData';

import {
  MovieCardContainer,
  MovieCardItem,
  MovieCardImg,
  MovieCardDescr,
  MovieCardInfo,
  MovieCardRelease,
  MovieCardTitle,
  MovieCardGenres,
} from './MovieCard.style';

export const MovieCard: FC = (): React.ReactElement => {
  return (
    <MovieCardContainer>
      {moviesData.map(({ id, poster_path, title, genres, release_date }) => {
        console.log(release_date.split('-')[0]);
        return (
          <MovieCardItem key={id}>
            <MovieCardImg src={poster_path} alt={title} />
            <MovieCardInfo>
              <MovieCardDescr>
                <MovieCardTitle>{title}</MovieCardTitle>
                <MovieCardGenres>{genres.slice().join(', ')}</MovieCardGenres>
              </MovieCardDescr>
              <MovieCardRelease>{release_date.split('-')[0]}</MovieCardRelease>
            </MovieCardInfo>
          </MovieCardItem>
        );
      })}
    </MovieCardContainer>
  );
};
