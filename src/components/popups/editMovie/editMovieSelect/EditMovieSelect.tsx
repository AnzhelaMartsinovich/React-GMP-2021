import React, { FC } from 'react';

import { addMovieSelectData } from 'utils/addMovieData';

import { EditSelect, EditMovieOption } from './EditMovieSelect.style';

export const EditMovieSelect: FC = () => (
  <EditSelect name='genre'>
    {addMovieSelectData.map(({ label, value, id }) => (
      <EditMovieOption
        key={id}
        value={value}
      >
        {label}
      </EditMovieOption>
    ))}
  </EditSelect>
);
