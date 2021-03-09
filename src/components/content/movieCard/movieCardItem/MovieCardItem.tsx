import React, { FC, useState } from 'react';

import { MovieCardInfo } from './movieCardInfo/MovieCardInfo';
import { MovieCardItemProps } from './MovieCardItem.interface';
import { MovieHover } from './movieHover/MovieHover';

import {
  MovieCardItemContainer,
  MovieCardImgContainer,
  MovieCardImg,
} from './MovieCardItem.style';

export const MovieCardItem: FC<MovieCardItemProps> = ({
  id,
  poster_path,
  title,
  genres,
  release_date,
  addFormPlaceholderData,
  addMovieSelectData,
}) => {
  const [showIcon, setShowIcon] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const onMouseOverPosterHandler = () => {
    setShowIcon(true);
  };

  const onMouseOutPosterHandler = () => {
    setShowIcon(false);
  };

  const onClickHandler = () => {
    setShowPanel(!showPanel);
  };

  return (
    <MovieCardItemContainer key={id}>
      <MovieCardImgContainer
        onMouseOver={onMouseOverPosterHandler}
        onMouseOut={onMouseOutPosterHandler}
      >
        <MovieHover
          showIcon={showIcon}
          showPanel={showPanel}
          onClickHandler={onClickHandler}
          addFormPlaceholderData={addFormPlaceholderData}
          addMovieSelectData={addMovieSelectData}
        />
        <MovieCardImg src={poster_path} alt={title} />
      </MovieCardImgContainer>
      <MovieCardInfo
        title={title}
        genres={genres}
        release_date={release_date}
      />
    </MovieCardItemContainer>
  );
};
