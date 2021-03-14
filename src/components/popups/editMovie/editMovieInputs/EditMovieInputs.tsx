import React, { FC } from 'react';

import { PlaceholderData } from 'baseTypes/BaseTypes.interface';

import { Label } from 'components/common/label/Label.style';
import { EditMovieInputItem, EditMovieInput } from './EditMovieInputs.style';

export const EditMovieInputs: FC<PlaceholderData> = ({
  addFormPlaceholderData,
}) => (
  <>
    {addFormPlaceholderData.map(({ id, title, placeholder, type }) => (
      <EditMovieInputItem key={id}>
        <Label>
          {title}
          <EditMovieInput value={placeholder} type={type} />
        </Label>
      </EditMovieInputItem>
    ))}
  </>
);
