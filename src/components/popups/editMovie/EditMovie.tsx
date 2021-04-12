import React, { FC } from 'react';

import { EditMovieProps } from './EditMovie.interface';
import {
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';
import { EDIT_MOVIE, GENRE } from 'utils/constants';
import { Cross } from 'components/common/cross/Cross';
import { EditMovieInputs } from './editMovieInputs/EditMovieInputs';
import { EditMovieSelect } from './editMovieSelect/EditMovieSelect';
import { FormButtons } from 'components/common/button/formButtons/FormButtons';
import { RESET, SAVE } from 'utils/constants';

import { Label } from 'components/common/label/Label.style';
import { Title1 } from 'components/common/title/Title.style';
import { EditMovieContainer, EditMovieForm } from './EditMovie.style';

export const EditMovie: FC<
  EditMovieProps & PlaceholderData & MovieSelectData
> = ({ addFormPlaceholderData, setModalIsOpen, addMovieSelectData }) => (
  <EditMovieContainer>
    <EditMovieForm>
      <Cross setModalIsOpen={setModalIsOpen} />
      <Title1>{EDIT_MOVIE}</Title1>
      <EditMovieInputs addFormPlaceholderData={addFormPlaceholderData} />
      <Label>
        {GENRE}
        <EditMovieSelect addMovieSelectData={addMovieSelectData} />
      </Label>
      <FormButtons leftBtnText={RESET} rightBtnText={SAVE} />
    </EditMovieForm>
  </EditMovieContainer>
);
