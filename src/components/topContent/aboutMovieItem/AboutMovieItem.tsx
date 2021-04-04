import React, { FC } from 'react';

import { AboutMovieItemProps } from './AboutMovieItem.interface';

import {
  AboutMovieItemContainer,
  AboutMovieItemRightPart,
  AboutMovieImg,
  AboutMovieTitle,
  AboutMovieGroup,
  AboutMovieRating,
  AboutMovieTagline,
  AboutMovieData,
  AboutMovieGroupTwo,
  AboutMovieDescr,
} from './AboutMovieItem.style';
import { MovieRuntime } from 'components/common/movie/MovieComponents.style';

export const AboutMovieItem: any = ({ data }: AboutMovieItemProps) => {
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
      <AboutMovieImg src={poster_path} alt={title} />
      <AboutMovieItemRightPart>
        <AboutMovieGroup>
          <AboutMovieTitle>{title}</AboutMovieTitle>
          <AboutMovieRating>{vote_average}</AboutMovieRating>
        </AboutMovieGroup>
        <AboutMovieTagline>{tagline}</AboutMovieTagline>
        <AboutMovieGroupTwo>
          <AboutMovieData>{release_date.slice(0, 4)}</AboutMovieData>
          <MovieRuntime>{`${runtime} min`}</MovieRuntime>
        </AboutMovieGroupTwo>
        <AboutMovieDescr>{overview}</AboutMovieDescr>
      </AboutMovieItemRightPart>
    </AboutMovieItemContainer>
  );
};
