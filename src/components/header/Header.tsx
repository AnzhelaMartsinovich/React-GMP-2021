import React from 'react';

import { Logo } from '../common/logo/Logo';

import { HeaderWrap, HeaderTop, HeaderBottom } from './Header.style';
import { ButtonAdd, ButtonSearch } from '../common/button/Button.style';
import { Title1 } from '../common/title/Title.style';
import { Input } from '../common/input/Input.style';

export const Header = () => (
  <HeaderWrap>
    <HeaderTop>
      <Logo />
      <ButtonAdd>+ Add movie</ButtonAdd>
    </HeaderTop>

    <HeaderBottom>
      <Title1>Find your movie</Title1>
      <Input placeholder='What do you want to watch?' />
      <ButtonSearch>Search</ButtonSearch>
    </HeaderBottom>
  </HeaderWrap>
);
