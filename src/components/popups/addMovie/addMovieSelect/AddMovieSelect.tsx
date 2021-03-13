import React, { FC } from 'react';

import { AddMovieSelectProps } from './AddMovieSelect.interface';

import { AddSelect, AddMovieOption } from './AddMovieSelect.style';

export const AddMovieSelect: FC<AddMovieSelectProps> = ({
  addMovieSelectData,
}) => (
  <AddSelect name='genre'>
    {addMovieSelectData.map(
      ({ label, value, id, hidden, disabled, selected }) => (
        <AddMovieOption
          key={id}
          value={value}
          hidden={hidden}
          disabled={disabled}
          selected={selected}
        >
          {label}
        </AddMovieOption>
      )
    )}
  </AddSelect>
);
