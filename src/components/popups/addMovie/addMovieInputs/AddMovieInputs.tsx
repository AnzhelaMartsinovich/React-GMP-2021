import React, { FC } from 'react';

import { AddMovieInputsProps } from './AddMovieInputs.interface';

import { Label } from '../../../common/label/Label.style';
import { AddMovieInputItem, AddMovieInput } from './AddMovieInputs.style';

export const AddMovieInputs: FC<AddMovieInputsProps> = ({
  addFormPlaceholderData,
}) => (
  <>
    {addFormPlaceholderData.map(({ id, title, placeholder, type }) => (
      <AddMovieInputItem key={id}>
        <Label>
          {title}
          <AddMovieInput placeholder={placeholder} type={type} />
        </Label>
      </AddMovieInputItem>
    ))}
  </>
);
