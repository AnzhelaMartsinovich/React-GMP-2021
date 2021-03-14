import React, { FC, useState } from 'react';

import { Logo } from 'components/common/logo/Logo';
import {
  ADD_MOVIE,
  FIND_YOUR_MOVIE,
  SEARCH,
  PLACEHOLDER_TEXT,
} from 'utils/constants';
import {
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';
import { AddMovie } from '../../popups/addMovie/AddMovie';

import { HeaderTop, HeaderBottom, HeaderInput } from './Header.style';
import { ButtonGray, ButtonPink } from 'components/common/button/Button.style';
import { Title1 } from 'components/common/title/Title.style';

export const Header: FC<PlaceholderData & MovieSelectData> = ({
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
