import React, { FC } from 'react';

import { AddMovieProps } from './AddMovie.interface';
import { ADD_MOVIE, GENRE } from 'utils/constants';
import { FormButtons } from '../../common/button/formButtons/FormButtons';
import { AddMovieInputs } from './addMovieInputs/AddMovieInputs';
import { AddMovieSelect } from './addMovieSelect/AddMovieSelect';
import { Cross } from '../../common/cross/Cross';
import { RESET, SUBMIT } from 'utils/constants';

import { Label } from '../../common/label/Label.style';
import { Title1 } from '../../common/title/Title.style';
import { AddMovieContainer, AddMovieForm } from './AddMovie.style';

export const AddMovie: FC<AddMovieProps> = ({
  setModalIsOpen,
  postMovieDataRequest,
  resetMovieForm,
}) => (
  <AddMovieContainer>
    <AddMovieForm>
      <Cross setModalIsOpen={setModalIsOpen} />
      <Title1>{ADD_MOVIE}</Title1>
      <AddMovieInputs />
      <Label>
        {GENRE}
        <AddMovieSelect />
      </Label>
      <FormButtons
        leftBtnText={RESET}
        rightBtnText={SUBMIT}
        onOkEvent={postMovieDataRequest}
        setModalIsOpen={setModalIsOpen}
        onCancelEvent={resetMovieForm}
      />
    </AddMovieForm>
  </AddMovieContainer>
);
