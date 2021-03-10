import React, { FC } from 'react';

import { AddMovieProps } from './AddMovie.interface';
import { ADD_MOVIE } from '../../../utils/constants';
import { ReactComponent as Cross } from '../../../img/crossIcon.svg';
import { AddMovieButtons } from './addMovieButtons/AddMovieButtons';

import { Label } from '../../common/label/Label.style';
import { Title1 } from '../../common/title/Title.style';
import {
  AddMovieContainer,
  AddMovieForm,
  AddMovieInput,
  AddMovieInputItem,
  CrossItem,
} from './AddMovie.style';

export const AddMovie: FC<AddMovieProps> = ({
  addFormPlaceholderData,
  open,
  setModalIsOpen,
}) => (
  <AddMovieContainer open={open}>
    <AddMovieForm>
      <CrossItem onClick={setModalIsOpen}>
        <Cross />
      </CrossItem>
      <Title1>{ADD_MOVIE}</Title1>
      {addFormPlaceholderData.map(({ id, title, placeholder, type }) => (
        <AddMovieInputItem key={id}>
          <Label>
            {title}
            <AddMovieInput placeholder={placeholder} type={type} />
          </Label>
        </AddMovieInputItem>
      ))}
      <AddMovieButtons />
    </AddMovieForm>
  </AddMovieContainer>
);
