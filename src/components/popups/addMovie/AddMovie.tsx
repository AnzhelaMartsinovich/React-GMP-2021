import React, { FC } from 'react';
import { Form, FormikProps, Formik } from 'formik';

import { AddMovieProps, Values } from './AddMovie.interface';
import { ADD_MOVIE } from 'utils/constants';
import { FormButtons } from '../../common/button/formButtons/FormButtons';
import { AddMovieInputs } from './addMovieInputs/AddMovieInputs';
import { AddMovieSelect } from './addMovieSelect/AddMovieSelect';
import { Cross } from '../../common/cross/Cross';
import { RESET, SUBMIT } from 'utils/constants';
import { initialData, SignupSchema } from './utils/addMovieUtils';

import { Title1 } from '../../common/title/Title.style';
import { AddMovieContainer, AddMovieWrap } from './AddMovie.style';

export const AddMovie: FC<AddMovieProps> = ({
  postMovieDataRequest,
  setModalIsOpen,
}) => {
  return (
    <AddMovieContainer>
      <AddMovieWrap>
        <Cross setModalIsOpen={setModalIsOpen} />
        <Title1>{ADD_MOVIE}</Title1>
        <Formik
          initialValues={initialData}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            postMovieDataRequest(values) && setModalIsOpen && setModalIsOpen();
          }}
        >
          {(props: FormikProps<Values>) => (
            <Form>
              <AddMovieInputs />
              <AddMovieSelect />
              <FormButtons
                resetBtnText={RESET}
                submitBtnText={SUBMIT}
                onCancelEvent={props.resetForm}
              />
            </Form>
          )}
        </Formik>
      </AddMovieWrap>
    </AddMovieContainer>
  );
};
