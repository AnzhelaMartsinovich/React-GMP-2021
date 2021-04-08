import React, { FC } from 'react';

import { MovieSelectData } from 'baseTypes/BaseTypes.interface';
import { addMovieSelectData } from 'utils/addMovieData';

import { EditSelect, EditMovieOption } from './EditMovieSelect.style';

export const EditMovieSelect: FC<MovieSelectData> = () => (
  <EditSelect name='genre'>
    {addMovieSelectData.map(
      ({ label, value, id, hidden, disabled, selected }) => (
        <EditMovieOption
          key={id}
          value={value}
          hidden={hidden}
          disabled={disabled}
          selected={selected}
        >
          {label}
        </EditMovieOption>
      )
    )}
  </EditSelect>
);
