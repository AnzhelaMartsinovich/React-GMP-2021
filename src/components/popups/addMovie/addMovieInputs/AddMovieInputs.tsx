import React, { FC } from 'react';

import { addFormPlaceholderData } from 'utils/addMovieData';

import { Label } from 'components/common/label/Label.style';
import { AddMovieInputItem, AddMovieInput } from './AddMovieInputs.style';
import { ErrorMessageStyled } from 'components/common/errorMessage/ErrorMessage.style';

export const AddMovieInputs: FC = () => (
  <>
    {addFormPlaceholderData.map(({ id, title, placeholder, name, type }) => (
      <AddMovieInputItem key={id}>
        <Label>
          {title}
          <AddMovieInput name={name} placeholder={placeholder} type={type} />
        </Label>
        <ErrorMessageStyled name={name} component='div' />
      </AddMovieInputItem>
    ))}
  </>
);
