import React, { FC } from 'react';

import { AddMovieProps } from './AddMovie.interface';
import {
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';
import { ADD_MOVIE, GENRE } from 'utils/constants';
import { FormButtons } from '../../common/button/formButtons/FormButtons';
import { AddMovieInputs } from './addMovieInputs/AddMovieInputs';
import { AddMovieSelect } from './addMovieSelect/AddMovieSelect';
import { Cross } from '../../common/cross/Cross';
import { RESET, SUBMIT } from 'utils/constants';

import { Label } from '../../common/label/Label.style';
import { Title1 } from '../../common/title/Title.style';
import { AddMovieContainer, AddMovieForm } from './AddMovie.style';

export const AddMovie: FC<
  AddMovieProps & PlaceholderData & MovieSelectData
> = ({ addFormPlaceholderData, setModalIsOpen, addMovieSelectData }) => (
  <AddMovieContainer>
    <AddMovieForm>
      <Cross setModalIsOpen={setModalIsOpen} />
      <Title1>{ADD_MOVIE}</Title1>
      <AddMovieInputs addFormPlaceholderData={addFormPlaceholderData} />
      <Label>
        {GENRE}
        <AddMovieSelect addMovieSelectData={addMovieSelectData} />
      </Label>
      <FormButtons leftBtnText={RESET} rightBtnText={SUBMIT} />
    </AddMovieForm>
  </AddMovieContainer>
);
