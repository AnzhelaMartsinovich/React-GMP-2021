import React, { FC } from 'react';
import { CrossProps } from './Cross.interface';
import CrossIcon from 'img/crossIcon.svg';

import { CrossItem, CrossImg } from './Cross.style';

export const Cross: FC<CrossProps> = ({ setModalIsOpen }) => (
  <CrossItem onClick={setModalIsOpen}>
    <CrossImg src={CrossIcon} alt='cross' />
  </CrossItem>
);
