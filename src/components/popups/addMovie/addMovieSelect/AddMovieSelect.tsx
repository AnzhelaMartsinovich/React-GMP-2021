import React, { FC } from 'react';

import { MovieSelectData } from 'baseTypes/BaseTypes.interface';

import { AddSelect, AddMovieOption } from './AddMovieSelect.style';

export const AddMovieSelect: FC<MovieSelectData> = ({ addMovieSelectData }) => (
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
