import React, { FC } from 'react';

import { EditMovieProps } from './EditMovie.interface';
import { EDIT_MOVIE } from '../../../utils/constants';
import { ReactComponent as Cross } from '../../../img/crossIcon.svg';
import { EditMovieButtons } from './editMovieButtons/EditMovieButtons';
import { EditMovieInputs } from './editMovieInputs/EditMovieInputs';
import { EditMovieSelect } from './editMovieSelect/EditMovieSelect';

import { Label } from '../../common/label/Label.style';
import { Title1 } from '../../common/title/Title.style';
import {
  EditMovieContainer,
  EditMovieForm,
  CrossItem,
} from './EditMovie.style';

export const EditMovie: FC<EditMovieProps> = ({
  addFormPlaceholderData,
  open,
  setModalIsOpen,
  addMovieSelectData,
}) => (
  <EditMovieContainer open={open}>
    <EditMovieForm>
      <CrossItem onClick={setModalIsOpen}>
        <Cross />
      </CrossItem>
      <Title1>{EDIT_MOVIE}</Title1>
      <EditMovieInputs addFormPlaceholderData={addFormPlaceholderData} />
      <Label>
        Genre
        <EditMovieSelect addMovieSelectData={addMovieSelectData} />
      </Label>
      <EditMovieButtons />
    </EditMovieForm>
  </EditMovieContainer>
);
