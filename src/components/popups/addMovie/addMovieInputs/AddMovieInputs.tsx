import React, { FC } from 'react';

import { addFormPlaceholderData } from 'utils/addMovieData';
import { MyTextField } from 'components/common/myTextField/MyTextField';

export const AddMovieInputs: FC = () => (
  <>
    {addFormPlaceholderData.map(({ id, title, placeholder, name, type }) => (
      <MyTextField
        name={name}
        type={type}
        placeholder={placeholder}
        label={title}
        key={id}
      />
    ))}
  </>
);
