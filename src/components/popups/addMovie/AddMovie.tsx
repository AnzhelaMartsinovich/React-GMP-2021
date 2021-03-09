import React, { FC } from 'react';

import { AddMovieProps } from './AddMovie.interface';
import { ADD_MOVIE, GENRE } from '../../../utils/constants';
import { AddMovieButtons } from './addMovieButtons/AddMovieButtons';
import { AddMovieInputs } from './addMovieInputs/AddMovieInputs';
import { AddMovieSelect } from './addMovieSelect/AddMovieSelect';
import { Cross } from '../../common/cross/Cross';

import { Label } from '../../common/label/Label.style';
import { Title1 } from '../../common/title/Title.style';
import { AddMovieContainer, AddMovieForm } from './AddMovie.style';

export const AddMovie: FC<AddMovieProps> = ({
  addFormPlaceholderData,
  setModalIsOpen,
  addMovieSelectData,
}) => (
  <AddMovieContainer>
    <AddMovieForm>
      <Cross setModalIsOpen={setModalIsOpen} />
      <Title1>{ADD_MOVIE}</Title1>
      <AddMovieInputs addFormPlaceholderData={addFormPlaceholderData} />
      <Label>
        {GENRE}
        <AddMovieSelect addMovieSelectData={addMovieSelectData} />
      </Label>
      <AddMovieButtons />
    </AddMovieForm>
  </AddMovieContainer>
);
