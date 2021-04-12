import React, { FC } from 'react';
import { connect } from 'react-redux';

import * as actions from 'store/actions/actions';
import { editFormPlaceholderData } from 'utils/editMovieData';
import { EditMovieInputsProps } from '../EditMovie.interface';
import { AppState } from 'baseTypes/BaseTypes.interface';
import {
  onChangeTitleHandler,
  onChangeDateHandler,
  onChangeUrlHandler,
  onChangeOverviewHandler,
  onChangeRuntimeHandler,
} from '../../addMovie/addMovieInputs/utils/AddMovieInputsUtils';

import { Label } from 'components/common/label/Label.style';
import { EditMovieInputItem, EditMovieInput } from './EditMovieInputs.style';

export const EditMovieInputsComponent: FC<EditMovieInputsProps> = ({
  movieData,
  setFormTitle,
  setFormDate,
  setFormUrl,
  setFormOverview,
  setFormRuntime,
}) => {
  console.log(movieData);
  const { id, title, release_date, poster_path, overview, runtime } = movieData;
  return (
    <EditMovieInputItem key={movieData.id}>
      <Label>
        {editFormPlaceholderData[0].title}
        <EditMovieInput defaultValue={id} />
      </Label>
      <Label>
        {editFormPlaceholderData[1].title}
        <EditMovieInput
          defaultValue={title}
          onChange={(e) => onChangeTitleHandler(e, setFormTitle)}
        />
      </Label>
      <Label>
        {editFormPlaceholderData[2].title}
        <EditMovieInput
          defaultValue={release_date}
          type={editFormPlaceholderData[2].type}
          onChange={(e) => onChangeDateHandler(e, setFormDate)}
        />
      </Label>
      <Label>
        {editFormPlaceholderData[3].title}
        <EditMovieInput
          defaultValue={poster_path}
          onChange={(e) => onChangeUrlHandler(e, setFormUrl)}
        />
      </Label>
      <Label>
        {editFormPlaceholderData[4].title}
        <EditMovieInput
          defaultValue={overview}
          onChange={(e) => onChangeOverviewHandler(e, setFormOverview)}
        />
      </Label>
      <Label>
        {editFormPlaceholderData[5].title}
        <EditMovieInput
          defaultValue={runtime}
          onChange={(e) => onChangeRuntimeHandler(e, setFormRuntime)}
        />
      </Label>
    </EditMovieInputItem>
  );
};

export const EditMovieInputs = connect(
  (state: AppState) => ({}),
  actions
)(EditMovieInputsComponent);
