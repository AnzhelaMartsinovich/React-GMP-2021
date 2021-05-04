import React, { FC } from 'react';
import { connect } from 'react-redux';

import { DeleteMovieProps } from './DeleteMovie.interface';
import { DELETE_MOVIE, DELETE_MESSAGE, CONFIRM } from 'utils/constants';
import { Cross } from '../../common/cross/Cross';
import { deleteMovieRequest } from 'store/actions/actions';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { getMovieDataIdSelector } from 'store/mainPage/selectors';

import { Title1 } from '../../common/title/Title.style';
import {
  DeleteMovieContainer,
  DeleteMovieForm,
  DeleteMessage,
  ConfirmButton,
} from './DeleteMovie.style';

export const DeleteMovieComponent: FC<DeleteMovieProps> = ({
  setModalIsOpen,
  deleteMovieRequest,
  movieId,
}) => {
  const onHandleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    deleteMovieRequest(movieId);
    setModalIsOpen && setModalIsOpen();
  };

  return (
    <DeleteMovieContainer>
      <DeleteMovieForm>
        <Cross setModalIsOpen={setModalIsOpen} />
        <Title1>{DELETE_MOVIE}</Title1>
        <DeleteMessage>{DELETE_MESSAGE}</DeleteMessage>
        <ConfirmButton onClick={onHandleClick}>{CONFIRM}</ConfirmButton>
      </DeleteMovieForm>
    </DeleteMovieContainer>
  );
};

export const DeleteMovie = connect(
  (state: AppState) => ({
    movieId: getMovieDataIdSelector(state),
  }),
  {
    deleteMovieRequest,
  }
)(DeleteMovieComponent);
