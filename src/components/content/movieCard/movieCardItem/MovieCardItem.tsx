import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MovieCardInfo } from './movieCardInfo/MovieCardInfo';
import { MovieCardItemProps } from './MovieCardItem.interface';
import { MovieHover } from './movieHover/MovieHover';

import {
  MovieCardItemContainer,
  MovieCardImgContainer,
} from './MovieCardItem.style';
import { MovieCardImg } from 'components/common/movie/MovieComponents.style';

export const MovieCardItem: FC<MovieCardItemProps> = ({
  id,
  poster_path,
  title,
  genres,
  release_date,
  getMovieDataRequest,
}) => {
  const history = useHistory();
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
    getMovieDataRequest(id);
  };

  const onClickImgHandler = () => {
    history.push(`/film/${id}`);
  };

  const closePanel = () => {
    setShowPanel(false);
    setShowIcon(false);
  };

  const addDefaultSrc = (e: any) => {
    e.target.src = 'http://placehold.it/400x600/555555.gif&text=No+image.';
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
          closePanel={closePanel}
        />
        <MovieCardImg
          src={poster_path}
          alt={title}
          onError={addDefaultSrc}
          onClick={onClickImgHandler}
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
