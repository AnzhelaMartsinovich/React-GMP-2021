import React, { FC, useState } from 'react';

import Dots from 'img/dots.svg';
import { EDIT, DELETE } from 'utils/constants';
import { Cross } from '../../../../common/cross/Cross';
import { MovieHoverProps } from './MovieHover.interface';
import { EditMovie } from '../../../../popups/editMovie/EditMovie';
import { DeleteMovie } from '../../../../popups/deleteMovie/DeleteMovie';
import { useCustomHook } from 'commonCode/CommonCode';

import {
  MovieHoverPanel,
  MovieHoverItems,
  MovieHoverItem,
  MovieHoverImg,
} from './MovieHover.style';

export const MovieHover: FC<MovieHoverProps> = ({
  showIcon,
  showPanel,
  onClickHandler,
  closePanel,
}) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const setEditOpenHandler = useCustomHook(editOpen, setEditOpen, closePanel);
  const setDeleteOpenHandler = useCustomHook(
    deleteOpen,
    setDeleteOpen,
    closePanel
  );

  return (
    <>
      <MovieHoverPanel showIcon={showIcon} onClick={onClickHandler}>
        <MovieHoverImg src={Dots} alt='dots' />
      </MovieHoverPanel>

      {showPanel && (
        <MovieHoverItems showPanel={showPanel}>
          <Cross setModalIsOpen={onClickHandler} />
          <MovieHoverItem onClick={setEditOpenHandler}>{EDIT}</MovieHoverItem>
          <MovieHoverItem onClick={setDeleteOpenHandler}>
            {DELETE}
          </MovieHoverItem>
        </MovieHoverItems>
      )}

      {editOpen && <EditMovie setModalIsOpen={setEditOpenHandler} />}

      {deleteOpen && <DeleteMovie setModalIsOpen={setDeleteOpenHandler} />}
    </>
  );
};
