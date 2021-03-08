import React, { FC } from 'react';

import { AddMovieProps } from './AddMovie.interface';
import { ADD_MOVIE } from '../../../utils/constants';
import { ReactComponent as Cross } from '../../../img/crossIcon.svg';
import { AddMovieButtons } from './addMovieButtons/AddMovieButtons';
import { AddMovieInputs } from './addMovieInputs/AddMovieInputs';
import { AddMovieSelect } from './addMovieSelect/AddMovieSelect';

import { Label } from '../../common/label/Label.style';
import { Title1 } from '../../common/title/Title.style';
import { AddMovieContainer, AddMovieForm, CrossItem } from './AddMovie.style';

export const AddMovie: FC<AddMovieProps> = ({
  addFormPlaceholderData,
  open,
  setModalIsOpen,
  addMovieSelectData,
}) => (
  <AddMovieContainer open={open}>
    <AddMovieForm>
      <CrossItem onClick={setModalIsOpen}>
        <Cross />
      </CrossItem>
      <Title1>{ADD_MOVIE}</Title1>
      <AddMovieInputs addFormPlaceholderData={addFormPlaceholderData} />
      <Label>
        Genre
        <AddMovieSelect addMovieSelectData={addMovieSelectData} />
      </Label>
      <AddMovieButtons />
    </AddMovieForm>
  </AddMovieContainer>
);
