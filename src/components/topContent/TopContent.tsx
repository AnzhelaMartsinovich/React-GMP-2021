import React, { FC } from 'react';

import { Header } from './header/Header';

import { TopContentProps } from './TopContent.interface';
import {
  PlaceholderData,
  MovieSelectData,
  MoviesDataProps,
} from 'baseTypes/BaseTypes.interface';
import { AboutMovieItem } from './aboutMovieItem/AboutMovieItem';
import { SearchPart } from './searchPart/SearchPart';

import { TopContentContainer } from './TopContent.style';

export const TopContent: FC<
  TopContentProps & PlaceholderData & MovieSelectData & MoviesDataProps
> = ({
  addFormPlaceholderData,
  addMovieSelectData,
  moviesData,
  movieId,
  hideMovie,
}) => {
  const data = movieId && moviesData?.find((item) => item.id === movieId);
  return (
    <TopContentContainer>
      <Header
        addFormPlaceholderData={addFormPlaceholderData}
        addMovieSelectData={addMovieSelectData}
        data={data}
        hideMovie={hideMovie}
      />
      {data ? <AboutMovieItem data={data} /> : <SearchPart />}
    </TopContentContainer>
  );
};
