import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Logo } from 'components/common/logo/Logo';
import { ADD_MOVIE } from 'utils/constants';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { HeaderProps } from './Header.interface';
import { AddMovie } from '../../popups/addMovie/AddMovie';
import { useCustomHook } from 'commonCode/CommonCode';
import { resetMovieData, postMovieDataRequest } from 'store/actions/actions';

import { HeaderContainer, ButtonSearch, SearchIcon } from './Header.style';
import { ButtonGray } from 'components/common/button/Button.style';

export const HeaderComponent: FC<HeaderProps> = ({
  resetMovieData,
  postMovieDataRequest,
  slug,
}) => {
  const [open, setOpen] = useState(false);
  const setModalIsOpen = useCustomHook(open, setOpen);

  return (
    <HeaderContainer>
      <Logo />
      {slug ? (
        <Link to='/'>
          <ButtonSearch onClick={resetMovieData}>
            <SearchIcon />
          </ButtonSearch>
        </Link>
      ) : (
        <>
          <ButtonGray onClick={setModalIsOpen}>{ADD_MOVIE}</ButtonGray>
          {open && (
            <AddMovie
              setModalIsOpen={setModalIsOpen}
              postMovieDataRequest={postMovieDataRequest}
            />
          )}
        </>
      )}
    </HeaderContainer>
  );
};

export const Header = connect((state: AppState) => ({}), {
  resetMovieData,
  postMovieDataRequest,
})(HeaderComponent);
