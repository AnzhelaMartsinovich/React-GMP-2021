import React, { FC } from 'react';

import { editMovieSelectData } from 'utils/editMovieData';
import { GENRE } from 'utils/constants';
import { SelectField } from 'components/common/selectField/SelectField';

import { EditMovieOption } from './EditMovieSelect.style';

export const EditMovieSelect: FC = () => (
  <SelectField label={GENRE} name='genres'>
    {editMovieSelectData.map(({ label, id }: any) => (
      <EditMovieOption key={id}>{label}</EditMovieOption>
    ))}
  </SelectField>
);
