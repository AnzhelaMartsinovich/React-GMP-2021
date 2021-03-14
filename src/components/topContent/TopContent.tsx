import React, { FC } from 'react';

import { Header } from './header/Header';

import { TopContentProps } from './TopContent.interface';
import {
  PlaceholderData,
  MovieSelectData,
  MoviesDataProps,
} from 'baseTypes/BaseTypes.interface';
import { AboutMovieItem } from './aboutMovieItem/AboutMovieItem';

import { TopContentContainer } from './TopContent.style';

export const TopContent: FC<
  TopContentProps & PlaceholderData & MovieSelectData & MoviesDataProps
> = ({ addFormPlaceholderData, addMovieSelectData, moviesData, movieId }) => {
  const data = moviesData.find((item) => item.id === movieId);

  return (
    <TopContentContainer>
      {data ? (
        <AboutMovieItem data={data} />
      ) : (
        <Header
          addFormPlaceholderData={addFormPlaceholderData}
          addMovieSelectData={addMovieSelectData}
        />
      )}
    </TopContentContainer>
  );
};
