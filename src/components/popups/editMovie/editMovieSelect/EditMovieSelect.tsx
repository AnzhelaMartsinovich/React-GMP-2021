import React, { FC } from 'react';

import { EditMovieSelectProps } from './EditMovieSelect.interface';

import { EditSelect, EditMovieOption } from './EditMovieSelect.style';

export const EditMovieSelect: FC<EditMovieSelectProps> = ({
  addMovieSelectData,
}) => (
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
