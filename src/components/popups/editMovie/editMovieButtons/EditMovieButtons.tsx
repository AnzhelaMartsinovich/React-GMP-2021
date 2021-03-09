import React, { FC } from 'react';

import { RESET, SAVE } from '../../../../utils/constants';

import {
  ButtonsContainer,
  ButtonReset,
  ButtonSubmit,
} from './EditMovieButtons.style';

export const EditMovieButtons: FC = () => (
  <ButtonsContainer>
    <ButtonReset>{RESET}</ButtonReset>
    <ButtonSubmit>{SAVE}</ButtonSubmit>
  </ButtonsContainer>
);
