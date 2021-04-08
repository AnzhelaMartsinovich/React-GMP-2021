import React, { FC } from 'react';

import { Label } from 'components/common/label/Label.style';
import { EditMovieInputItem, EditMovieInput } from './EditMovieInputs.style';
import { addFormPlaceholderData } from 'utils/addMovieData';

export const EditMovieInputs: FC = () => (
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
