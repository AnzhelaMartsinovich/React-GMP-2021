import React, { FC, useState } from 'react';

import { MovieCardInfo } from './movieCardInfo/MovieCardInfo';
import { MovieCardItemProps } from './MovieCardItem.interface';
import { MovieHover } from './movieHover/MovieHover';

import {
  MovieCardItemContainer,
  MovieCardImgContainer,
} from './MovieCardItem.style';
import { MovieCardImg } from '../../../common/movie/MovieComponents.style';

export const MovieCardItem: FC<MovieCardItemProps> = ({
  id,
  poster_path,
  title,
  genres,
  release_date,
  addFormPlaceholderData,
  addMovieSelectData,
  onClickMovie,
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

  const closePanel = () => {
    setShowPanel(false);
    setShowIcon(false);
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
          closePanel={closePanel}
        />
        <MovieCardImg
          src={poster_path}
          alt={title}
          onClick={() => onClickMovie(id)}
        />
      </MovieCardImgContainer>
      <MovieCardInfo
        title={title}
        genres={genres}
        release_date={release_date}
      />
    </MovieCardItemContainer>
  );
};
