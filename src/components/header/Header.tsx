import React, { FC } from 'react';

import { Logo } from '../common/logo/Logo';
import {
  ADD_MOVIE,
  FIND_YOUR_MOVIE,
  SEARCH,
  PLACEHOLDER_TEXT,
} from '../../utils/constants';

import { HeaderWrap, HeaderTop, HeaderBottom } from './Header.style';
import { ButtonAdd, ButtonSearch } from '../common/button/Button.style';
import { Title1 } from '../common/title/Title.style';
import { Input } from '../common/input/Input.style';

export const Header: FC = () => (
  <HeaderWrap>
    <HeaderTop>
      <Logo />
      <ButtonAdd>{ADD_MOVIE}</ButtonAdd>
    </HeaderTop>

    <HeaderBottom>
      <Title1>{FIND_YOUR_MOVIE}</Title1>
      <Input placeholder={PLACEHOLDER_TEXT} />
      <ButtonSearch>{SEARCH}</ButtonSearch>
    </HeaderBottom>
  </HeaderWrap>
);
