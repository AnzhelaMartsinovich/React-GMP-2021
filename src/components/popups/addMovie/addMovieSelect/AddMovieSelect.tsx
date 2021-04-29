import React, { FC } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'baseTypes/BaseTypes.interface';
import { setFormGenres } from 'store/actions/actions';
import { onChangeGenresHandler } from 'components/popups/addMovie/addMovieInputs/utils/AddMovieInputsUtils';
import { addMovieSelectData } from 'utils/addMovieData';
import { AddMovieSelectProps } from '../AddMovie.interface';

import { AddSelect, AddMovieOption } from './AddMovieSelect.style';

export const AddMovieSelectComponent: FC<AddMovieSelectProps> = ({
  setFormGenres,
}) => {
  return (
    <AddSelect
      name='genre'
      onChange={(e) => onChangeGenresHandler(e, setFormGenres)}
    >
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
};

export const AddMovieSelect = connect((state: AppState) => ({}), {
  setFormGenres,
})(AddMovieSelectComponent);
