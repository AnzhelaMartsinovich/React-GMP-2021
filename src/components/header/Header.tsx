import React, { FC, useState } from 'react';

import { Logo } from '../common/logo/Logo';
import {
  ADD_MOVIE,
  FIND_YOUR_MOVIE,
  SEARCH,
  PLACEHOLDER_TEXT,
} from '../../utils/constants';
import { HeaderProps } from './Header.interface';
import { AddMovie } from './addMovie/AddMovie';

import {
  HeaderWrap,
  HeaderTop,
  HeaderBottom,
  HeaderInput,
} from './Header.style';
import { ButtonGray, ButtonPink } from '../common/button/Button.style';
import { Title1 } from '../common/title/Title.style';

export const Header: FC<HeaderProps> = ({ addFormPlaceholderData }) => {
  const [open, setOpen] = useState(false);

  const setModalIsOpen = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrap>
      <HeaderTop>
        <Logo />
        <ButtonGray onClick={setModalIsOpen}>{ADD_MOVIE}</ButtonGray>
        <AddMovie
          open={open}
          setModalIsOpen={setModalIsOpen}
          addFormPlaceholderData={addFormPlaceholderData}
        />
      </HeaderTop>

      <HeaderBottom>
        <Title1>{FIND_YOUR_MOVIE}</Title1>
        <HeaderInput placeholder={PLACEHOLDER_TEXT} />
        <ButtonPink>{SEARCH}</ButtonPink>
      </HeaderBottom>
    </HeaderWrap>
  );
};
