import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ErrorMessage } from 'formik';

import * as actions from 'store/actions/actions';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { AddMovieInputsComponentProps } from './AddMovieInputs.interface';
import {
  onChangeTitleHandler,
  onChangeDateHandler,
  onChangeUrlHandler,
  onChangeOverviewHandler,
  onChangeRuntimeHandler,
} from './utils/AddMovieInputsUtils';
import { addFormPlaceholderData } from 'utils/addMovieData';

import { Label } from 'components/common/label/Label.style';
import { AddMovieInputItem, AddMovieInput } from './AddMovieInputs.style';
import { ErrorMessageStyled } from 'components/common/errorMessage/ErrorMessage.style';

export const AddMovieInputsComponent: FC<AddMovieInputsComponentProps> = ({
  setFormTitle,
  setFormDate,
  setFormUrl,
  setFormOverview,
  setFormRuntime,
}) => (
  <>
    <AddMovieInputItem key={addFormPlaceholderData[0].id}>
      <Label>
        {addFormPlaceholderData[0].title}
        <AddMovieInput
          name='title'
          placeholder={addFormPlaceholderData[0].placeholder}
          type={addFormPlaceholderData[0].type}
        />
      </Label>
      <ErrorMessage name='title' component='div' />
      {/* <ErrorMessageStyled name='title' component='div' /> */}
    </AddMovieInputItem>
    <AddMovieInputItem key={addFormPlaceholderData[1].id}>
      <Label>
        {addFormPlaceholderData[1].title}
        <AddMovieInput
          name='release_date'
          placeholder={addFormPlaceholderData[1].placeholder}
          type={addFormPlaceholderData[1].type}
        />
      </Label>
    </AddMovieInputItem>
    <AddMovieInputItem key={addFormPlaceholderData[2].id}>
      <Label>
        {addFormPlaceholderData[2].title}
        <AddMovieInput
          name='poster_path'
          placeholder={addFormPlaceholderData[2].placeholder}
          type={addFormPlaceholderData[2].type}
        />
      </Label>
      <ErrorMessage name='poster_path' component='div' />
      {/* <ErrorMessageStyled name='url' component='div' /> */}
    </AddMovieInputItem>
    <AddMovieInputItem key={addFormPlaceholderData[3].id}>
      <Label>
        {addFormPlaceholderData[3].title}
        <AddMovieInput
          name='overview'
          placeholder={addFormPlaceholderData[3].placeholder}
          type={addFormPlaceholderData[3].type}
        />
      </Label>
      <ErrorMessage name='overview' component='div' />
      {/* <ErrorMessageStyled name='overview' component='div' /> */}
    </AddMovieInputItem>
    {/* <AddMovieInputItem key={addFormPlaceholderData[4].id}>
        <Label>
          {addFormPlaceholderData[4].title}
          <AddMovieInput
            name='runtime'
            placeholder={addFormPlaceholderData[4].placeholder}
            type={addFormPlaceholderData[4].type}
          />
        </Label>
        <ErrorMessage name='runtime' component='div' />
        <ErrorMessageStyled name='runtime' component='div' />
      </AddMovieInputItem> */}
  </>
);

export const AddMovieInputs = connect(
  (state: AppState) => ({}),
  actions
)(AddMovieInputsComponent);
