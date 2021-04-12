import React, { FC } from 'react';
import { connect } from 'react-redux';

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
          placeholder={addFormPlaceholderData[0].placeholder}
          type={addFormPlaceholderData[0].type}
          onChange={(e) => onChangeTitleHandler(e, setFormTitle)}
        />
      </Label>
    </AddMovieInputItem>
    <AddMovieInputItem key={addFormPlaceholderData[1].id}>
      <Label>
        {addFormPlaceholderData[1].title}
        <AddMovieInput
          placeholder={addFormPlaceholderData[1].placeholder}
          type={addFormPlaceholderData[1].type}
          onChange={(e) => onChangeDateHandler(e, setFormDate)}
        />
      </Label>
    </AddMovieInputItem>
    <AddMovieInputItem key={addFormPlaceholderData[2].id}>
      <Label>
        {addFormPlaceholderData[2].title}
        <AddMovieInput
          placeholder={addFormPlaceholderData[2].placeholder}
          type={addFormPlaceholderData[2].type}
          onChange={(e) => onChangeUrlHandler(e, setFormUrl)}
        />
      </Label>
    </AddMovieInputItem>
    <AddMovieInputItem key={addFormPlaceholderData[3].id}>
      <Label>
        {addFormPlaceholderData[3].title}
        <AddMovieInput
          placeholder={addFormPlaceholderData[3].placeholder}
          type={addFormPlaceholderData[3].type}
          onChange={(e) => onChangeOverviewHandler(e, setFormOverview)}
        />
      </Label>
    </AddMovieInputItem>
    <AddMovieInputItem key={addFormPlaceholderData[4].id}>
      <Label>
        {addFormPlaceholderData[4].title}
        <AddMovieInput
          placeholder={addFormPlaceholderData[4].placeholder}
          type={addFormPlaceholderData[4].type}
          onChange={(e) => onChangeRuntimeHandler(e, setFormRuntime)}
        />
      </Label>
    </AddMovieInputItem>
  </>
);

export const AddMovieInputs = connect(
  (state: AppState) => ({}),
  actions
)(AddMovieInputsComponent);
