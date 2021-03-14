import React, { FC } from 'react';

import { AboutMovieItemProps } from './AboutMovieItem.interface';

import { AboutMovieItemContainer } from './AboutMovieItem.style';
import {
  MovieCardImg,
  MovieCardTitle,
  MovieRating,
  MovieTagline,
  MovieData,
  MovieRuntime,
  MovieDescr,
} from 'components/common/movie/MovieComponents.style';

export const AboutMovieItem: FC<AboutMovieItemProps> = ({ data }) => {
  const {
    poster_path,
    title,
    vote_average,
    tagline,
    release_date,
    runtime,
    overview,
  } = data;

  return (
    <AboutMovieItemContainer>
      <MovieCardImg src={poster_path} alt={title} />
      <div>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieRating>{vote_average}</MovieRating>
        <MovieTagline>{tagline}</MovieTagline>
        <MovieData>{release_date.slice(0, 4)}</MovieData>
        <MovieRuntime>{runtime}</MovieRuntime>
        <MovieDescr>{overview}</MovieDescr>
      </div>
    </AboutMovieItemContainer>
  );
};
