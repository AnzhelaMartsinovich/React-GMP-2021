import React, { FC, useState } from 'react';

import { Logo } from 'components/common/logo/Logo';
import { ADD_MOVIE } from 'utils/constants';
import {
  PlaceholderData,
  MovieSelectData,
} from 'baseTypes/BaseTypes.interface';
import { HeaderProps } from './Header.interface';
import { AddMovie } from '../../popups/addMovie/AddMovie';
import { useCustomHook } from 'commonCode/CommonCode';

import { HeaderContainer, ButtonSearch, SearchIcon } from './Header.style';
import { ButtonGray } from 'components/common/button/Button.style';

export const Header: FC<PlaceholderData & MovieSelectData & HeaderProps> = ({
  addFormPlaceholderData,
  addMovieSelectData,
  data,
}) => {
  const [open, setOpen] = useState(false);
  const setModalIsOpen = useCustomHook(open, setOpen);

  return (
    <HeaderContainer>
      <Logo />
      {data ? (
        <ButtonSearch>
          <SearchIcon />
        </ButtonSearch>
      ) : (
        <>
          <ButtonGray onClick={setModalIsOpen}>{ADD_MOVIE}</ButtonGray>
          {open && (
            <AddMovie
              setModalIsOpen={setModalIsOpen}
              addFormPlaceholderData={addFormPlaceholderData}
              addMovieSelectData={addMovieSelectData}
            />
          )}
        </>
      )}
    </HeaderContainer>
  );
};
