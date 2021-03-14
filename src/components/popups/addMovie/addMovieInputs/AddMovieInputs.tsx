import React, { FC } from 'react';

import { PlaceholderData } from 'baseTypes/BaseTypes.interface';

import { Label } from 'components/common/label/Label.style';
import { AddMovieInputItem, AddMovieInput } from './AddMovieInputs.style';

export const AddMovieInputs: FC<PlaceholderData> = ({
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
