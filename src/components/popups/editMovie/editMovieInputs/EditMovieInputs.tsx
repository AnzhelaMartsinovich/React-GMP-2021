import React, { FC } from 'react';

import { editFormData } from 'utils/editMovieData';
import { TextField } from 'components/common/textField/TextField';

import { EditMovieInputItem } from './EditMovieInputs.style';

export const EditMovieInputs: FC = () => (
  <EditMovieInputItem>
    {editFormData.map(({ title, name, disabled, id }) => (
      <TextField name={name} label={title} disabled={disabled} key={id} />
    ))}
  </EditMovieInputItem>
);
