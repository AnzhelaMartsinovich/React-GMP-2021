import React, { FC, useState } from 'react';

import { Logo } from '../common/logo/Logo';
import {
  ADD_MOVIE,
  FIND_YOUR_MOVIE,
  SEARCH,
  PLACEHOLDER_TEXT,
} from '../../utils/constants';
import { HeaderProps } from './Header.interface';
import { ReactComponent as Cross } from '../../img/crossIcon.svg';
import { AddMovieButtons } from './addMovie/addMovieButtons/AddMovieButtons';

import {
  HeaderWrap,
  HeaderTop,
  HeaderBottom,
  HeaderInput,
} from './Header.style';
import { ButtonGray, ButtonPink } from '../common/button/Button.style';
import { Title1 } from '../common/title/Title.style';
import { Label } from '../common/label/Label.style';
import {
  AddMovieContainer,
  AddMovieForm,
  AddMovieInput,
  AddMovieInputItem,
  CrossItem,
} from './addMovie/AddMovie.style';

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
        <AddMovieContainer open={open}>
          <AddMovieForm>
            <CrossItem onClick={setModalIsOpen}>
              <Cross />
            </CrossItem>
            <Title1>{ADD_MOVIE}</Title1>
            {addFormPlaceholderData.map(({ id, title, placeholder, type }) => (
              <AddMovieInputItem key={id}>
                <Label>
                  {title}
                  <AddMovieInput placeholder={placeholder} type={type} />
                </Label>
              </AddMovieInputItem>
            ))}
            <AddMovieButtons />
          </AddMovieForm>
        </AddMovieContainer>
      </HeaderTop>

      <HeaderBottom>
        <Title1>{FIND_YOUR_MOVIE}</Title1>
        <HeaderInput placeholder={PLACEHOLDER_TEXT} />
        <ButtonPink>{SEARCH}</ButtonPink>
      </HeaderBottom>
    </HeaderWrap>
  );
};
