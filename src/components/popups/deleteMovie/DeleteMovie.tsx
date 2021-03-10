import React, { FC } from 'react';

import { DeleteMovieProps } from './DeleteMovie.interface';
import {
  DELETE_MOVIE,
  DELETE_MESSAGE,
  CONFIRM,
} from '../../../utils/constants';
import { Cross } from '../../common/cross/Cross';

import { Title1 } from '../../common/title/Title.style';
import {
  DeleteMovieContainer,
  DeleteMovieForm,
  DeleteMessage,
  ConfirmButton,
} from './DeleteMovie.style';

export const DeleteMovie: FC<DeleteMovieProps> = ({ setModalIsOpen }) => {
  const onHandleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
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
