import React, { FC } from 'react';

import { ReactComponent as Dots } from '../../../../../img/dots.svg';
import { EDIT, DELETE } from '../../../../../utils/constants';
import { Cross } from '../../../../common/cross/Cross';
import { MovieHoverProps } from './MovieHover.interface';

import {
  MovieHoverPanel,
  MovieHoverItems,
  MovieHoverItem,
  CrossButton,
} from './MovieHover.style';

export const MovieHover: FC<MovieHoverProps> = ({
  showIcon,
  showPanel,
  onClickHandler,
}) => {
  return (
    <>
      <MovieHoverPanel showIcon={showIcon} onClick={onClickHandler}>
        <Dots />
      </MovieHoverPanel>

      {showPanel && (
        <MovieHoverItems showPanel={showPanel}>
          <CrossButton onClick={onClickHandler}>
            <Cross />
          </CrossButton>
          <MovieHoverItem>{EDIT}</MovieHoverItem>
          <MovieHoverItem>{DELETE}</MovieHoverItem>
        </MovieHoverItems>
      )}
    </>
  );
};
