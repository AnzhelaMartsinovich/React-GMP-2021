import React, { FC, useState } from 'react';

import { MovieCardInfo } from './movieCardInfo/MovieCardInfo';
import { MovieCardItemProps } from './MovieCardItem.interface';
import {
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';
import { MovieHover } from './movieHover/MovieHover';

import {
  MovieCardItemContainer,
  MovieCardImgContainer,
} from './MovieCardItem.style';
import { MovieCardImg } from 'components/common/movie/MovieComponents.style';

export const MovieCardItem: FC<
  MovieCardItemProps & PlaceholderData & MovieSelectData
> = ({
  id,
  poster_path,
  title,
  genres,
  release_date,
  addFormPlaceholderData,
  addMovieSelectData,
  getMovieDataRequest,
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
          addFormPlaceholderData={addFormPlaceholderData}
          addMovieSelectData={addMovieSelectData}
          closePanel={closePanel}
        />
        <MovieCardImg
          src={poster_path}
          alt={title}
          onClick={() => getMovieDataRequest(id)}
          onError={addDefaultSrc}
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
