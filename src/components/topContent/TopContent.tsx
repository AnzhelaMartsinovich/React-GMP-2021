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

export const TopContentComponent: FC<
  TopContentProps & PlaceholderData & MovieSelectData & MoviesDataProps
> = ({
  addFormPlaceholderData,
  addMovieSelectData,
  moviesData,
  movieId,
  hideMovie,
  movieAction,
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
      <button onClick={movieAction}>Click me!</button>
      {/* {data ? <AboutMovieItem data={data} /> : <SearchPart />} */}
    </TopContentContainer>
  );
};
