import React, { FC } from 'react';

import { EditMovieProps } from './EditMovie.interface';
import { EDIT_MOVIE, GENRE } from '../../../utils/constants';
import { Cross } from '../../common/cross/Cross';
import { EditMovieButtons } from './editMovieButtons/EditMovieButtons';
import { EditMovieInputs } from './editMovieInputs/EditMovieInputs';
import { EditMovieSelect } from './editMovieSelect/EditMovieSelect';

import { Label } from '../../common/label/Label.style';
import { Title1 } from '../../common/title/Title.style';
import { EditMovieContainer, EditMovieForm } from './EditMovie.style';

export const EditMovie: FC<EditMovieProps> = ({
  addFormPlaceholderData,
  open,
  setModalIsOpen,
  addMovieSelectData,
}) => (
  <EditMovieContainer open={open}>
    <EditMovieForm>
      <Cross onClick={setModalIsOpen} />
      <Title1>{EDIT_MOVIE}</Title1>
      <EditMovieInputs addFormPlaceholderData={addFormPlaceholderData} />
      <Label>
        {GENRE}
        <EditMovieSelect addMovieSelectData={addMovieSelectData} />
      </Label>
      <EditMovieButtons />
    </EditMovieForm>
  </EditMovieContainer>
);
