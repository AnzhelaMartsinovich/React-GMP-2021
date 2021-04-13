import React, { FC } from 'react';

import { addMovieSelectData } from 'utils/addMovieData';
import { GENRE } from 'utils/constants';
import { SelectField } from 'components/common/selectField/SelectField';

import { AddMovieOption } from './AddMovieSelect.style';

export const AddMovieSelect: FC = () => {
  return (
    <SelectField label={GENRE} name='genres'>
      {addMovieSelectData.map(({ label, value, id }) => (
        <AddMovieOption key={id} value={value}>
          {label}
        </AddMovieOption>
      ))}
    </SelectField>
  );
};
