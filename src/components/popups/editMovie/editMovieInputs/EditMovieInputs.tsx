import React, { FC } from 'react';

import { editFormData } from 'utils/editMovieData';
import { EditMovieInputsProps } from '../EditMovie.interface';
import { TextField } from 'components/common/textField/TextField';

import { EditMovieInputItem } from './EditMovieInputs.style';

export const EditMovieInputs: FC<EditMovieInputsProps> = ({ movieData }) => (
  <EditMovieInputItem key={movieData.id}>
    {editFormData.map(({ title, name, disabled }) => (
      <TextField
        name={name}
        label={title}
        defaultValue={movieData[name]}
        disabled={disabled}
      />
    ))}
  </EditMovieInputItem>
);
