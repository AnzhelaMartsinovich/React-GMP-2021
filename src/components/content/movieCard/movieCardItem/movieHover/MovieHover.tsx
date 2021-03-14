import React, { FC, useState } from 'react';

import { ReactComponent as Dots } from '../../../../../img/dots.svg';
import { EDIT, DELETE } from '../../../../../utils/constants';
import { Cross } from '../../../../common/cross/Cross';
import { MovieHoverProps } from './MovieHover.interface';
import {
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';
import { EditMovie } from '../../../../popups/editMovie/EditMovie';
import { DeleteMovie } from '../../../../popups/deleteMovie/DeleteMovie';

import {
  MovieHoverPanel,
  MovieHoverItems,
  MovieHoverItem,
} from './MovieHover.style';

export const MovieHover: FC<
  MovieHoverProps & PlaceholderData & MovieSelectData
> = ({
  showIcon,
  showPanel,
  onClickHandler,
  addFormPlaceholderData,
  addMovieSelectData,
  closePanel,
}) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const setEditOpenHandler = () => {
    setEditOpen(!editOpen);
    closePanel();
  };

  const setDeleteOpenHandler = () => {
    setDeleteOpen(!deleteOpen);
    closePanel();
  };

  return (
    <>
      <MovieHoverPanel showIcon={showIcon} onClick={onClickHandler}>
        <Dots />
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

      {editOpen && (
        <EditMovie
          addFormPlaceholderData={addFormPlaceholderData}
          addMovieSelectData={addMovieSelectData}
          setModalIsOpen={setEditOpenHandler}
        />
      )}

      {deleteOpen && <DeleteMovie setModalIsOpen={setDeleteOpenHandler} />}
    </>
  );
};
