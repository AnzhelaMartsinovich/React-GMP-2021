import React, { FC } from 'react';

import { DeleteMovieProps } from './DeleteMovie.interface';
import {
  DELETE_MOVIE,
  DELETE_MESSAGE,
  CONFIRM,
} from '../../../utils/constants';
import { ReactComponent as Cross } from '../../../img/crossIcon.svg';

import { Title1 } from '../../common/title/Title.style';
import {
  DeleteMovieContainer,
  DeleteMovieForm,
  CrossItem,
  DeleteMessage,
  ConfirmButton,
} from './DeleteMovie.style';

export const DeleteMovie: FC<DeleteMovieProps> = ({ open, setModalIsOpen }) => (
  <DeleteMovieContainer open={open}>
    <DeleteMovieForm>
      <CrossItem onClick={setModalIsOpen}>
        <Cross />
      </CrossItem>
      <Title1>{DELETE_MOVIE}</Title1>
      <DeleteMessage>{DELETE_MESSAGE}</DeleteMessage>
      <ConfirmButton>{CONFIRM}</ConfirmButton>
    </DeleteMovieForm>
  </DeleteMovieContainer>
);
