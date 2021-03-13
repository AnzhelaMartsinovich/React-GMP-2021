import React, { FC } from 'react';
import { CrossProps } from './Cross.interface';
import { ReactComponent as CrossIcon } from '../../../img/crossIcon.svg';

import { CrossItem } from './Cross.style';

export const Cross: FC<CrossProps> = ({ setModalIsOpen }) => (
  <CrossItem onClick={setModalIsOpen}>
    <CrossIcon />
  </CrossItem>
);
