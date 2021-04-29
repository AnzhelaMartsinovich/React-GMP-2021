import React, { FC } from 'react';

import { addFormPlaceholderData } from 'utils/addMovieData';
import { TextField } from 'components/common/textField/TextField';

export const AddMovieInputs: FC = () => (
  <>
    {addFormPlaceholderData.map(({ id, title, placeholder, name, type }) => (
      <TextField
        name={name}
        type={type}
        placeholder={placeholder}
        label={title}
        key={id}
      />
    ))}
  </>
);
