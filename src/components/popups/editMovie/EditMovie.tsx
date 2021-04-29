import React, { FC } from 'react';
import { connect } from 'react-redux';

import { EditMovieProps } from './EditMovie.interface';
import { EDIT_MOVIE, GENRE } from 'utils/constants';
import { Cross } from 'components/common/cross/Cross';
import { EditMovieInputs } from './editMovieInputs/EditMovieInputs';
import { EditMovieSelect } from './editMovieSelect/EditMovieSelect';
import { FormButtons } from 'components/common/button/formButtons/FormButtons';
import { RESET, SAVE } from 'utils/constants';
import { getMovieDataSelector } from 'store/mainPage/selectors';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { resetMovieForm, putMovieRequest } from 'store/actions/actions';

import { Label } from 'components/common/label/Label.style';
import { Title1 } from 'components/common/title/Title.style';
import { EditMovieContainer, EditMovieForm } from './EditMovie.style';

export const EditMovieComponent: FC<EditMovieProps> = ({
  setModalIsOpen,
  movieData,
  resetMovieForm,
  putMovieRequest,
}) => (
  <EditMovieContainer>
    <EditMovieForm>
      <Cross setModalIsOpen={setModalIsOpen} />
      <Title1>{EDIT_MOVIE}</Title1>
      <EditMovieInputs movieData={movieData} />
      <Label>
        {GENRE}
        <EditMovieSelect />
      </Label>
      <FormButtons
        leftBtnText={RESET}
        rightBtnText={SAVE}
        onOkEvent={putMovieRequest}
        setModalIsOpen={setModalIsOpen}
        onCancelEvent={resetMovieForm}
      />
    </EditMovieForm>
  </EditMovieContainer>
);

export const EditMovie = connect(
  (state: AppState) => ({
    movieData: getMovieDataSelector(state),
  }),
  {
    resetMovieForm,
    putMovieRequest,
  }
)(EditMovieComponent);
