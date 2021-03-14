import React, { FC, useState } from 'react';

import { Logo } from '../../common/logo/Logo';
import {
  ADD_MOVIE,
  FIND_YOUR_MOVIE,
  SEARCH,
  PLACEHOLDER_TEXT,
} from '../../../utils/constants';
import { HeaderProps } from './Header.interface';
import { AddMovie } from '../../popups/addMovie/AddMovie';

import { HeaderTop, HeaderBottom, HeaderInput } from './Header.style';
import { ButtonGray, ButtonPink } from '../../common/button/Button.style';
import { Title1 } from '../../common/title/Title.style';

export const Header: FC<HeaderProps> = ({
  addFormPlaceholderData,
  addMovieSelectData,
}) => {
  const [open, setOpen] = useState(false);

  const setModalIsOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderTop>
        <Logo />
        <ButtonGray onClick={setModalIsOpen}>{ADD_MOVIE}</ButtonGray>
        {open && (
          <AddMovie
            setModalIsOpen={setModalIsOpen}
            addFormPlaceholderData={addFormPlaceholderData}
            addMovieSelectData={addMovieSelectData}
          />
        )}
      </HeaderTop>

      <HeaderBottom>
        <Title1>{FIND_YOUR_MOVIE}</Title1>
        <HeaderInput placeholder={PLACEHOLDER_TEXT} />
        <ButtonPink>{SEARCH}</ButtonPink>
      </HeaderBottom>
    </>
  );
};
