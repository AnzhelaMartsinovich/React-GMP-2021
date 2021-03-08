import React, { FC } from 'react';

import { RESET, SUBMIT } from '../../../../utils/constants';

import {
  ButtonsContainer,
  ButtonReset,
  ButtonSubmit,
} from './AddMovieButtons.style';

export const AddMovieButtons: FC = () => (
  <ButtonsContainer>
    <ButtonReset>{RESET}</ButtonReset>
    <ButtonSubmit>{SUBMIT}</ButtonSubmit>
  </ButtonsContainer>
);
