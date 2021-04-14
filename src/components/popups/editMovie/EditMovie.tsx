import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Form, FormikProps, Formik } from 'formik';

import { EditMovieProps } from './EditMovie.interface';
import { EDIT_MOVIE } from 'utils/constants';
import { Cross } from 'components/common/cross/Cross';
import { EditMovieInputs } from './editMovieInputs/EditMovieInputs';
import { EditMovieSelect } from './editMovieSelect/EditMovieSelect';
import { FormButtons } from 'components/common/button/formButtons/FormButtons';
import { RESET, SAVE } from 'utils/constants';
import { getMovieDataSelector } from 'store/mainPage/selectors';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { putMovieRequest } from 'store/actions/actions';
import { Values } from '../addMovie/AddMovie.interface';

import { Title1 } from 'components/common/title/Title.style';
import { EditMovieContainer, EditMovieWrapper } from './EditMovie.style';

export const EditMovieComponent: FC<EditMovieProps> = ({
  setModalIsOpen,
  movieData,
  putMovieRequest,
}) => (
  <EditMovieContainer>
    <EditMovieWrapper>
      <Cross setModalIsOpen={setModalIsOpen} />
      <Title1>{EDIT_MOVIE}</Title1>
      <Formik
        initialValues={movieData}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          putMovieRequest(values) && setModalIsOpen && setModalIsOpen();
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <EditMovieInputs movieData={props.values} />
            <EditMovieSelect />
            <FormButtons
              resetBtnText={RESET}
              submitBtnText={SAVE}
              onCancelEvent={props.resetForm}
            />
          </Form>
        )}
      </Formik>
    </EditMovieWrapper>
  </EditMovieContainer>
);

export const EditMovie = connect(
  (state: AppState) => ({
    movieData: getMovieDataSelector(state),
  }),
  {
    putMovieRequest,
  }
)(EditMovieComponent);
