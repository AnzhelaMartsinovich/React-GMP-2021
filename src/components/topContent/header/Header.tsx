import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import { Logo } from 'components/common/logo/Logo';
import { ADD_MOVIE } from 'utils/constants';
import { AppState } from 'baseTypes/BaseTypes.interface';
import { HeaderProps } from './Header.interface';
import { AddMovie } from '../../popups/addMovie/AddMovie';
import { useCustomHook } from 'commonCode/CommonCode';
import { resetMovieData, postMovieDataRequest } from 'store/actions/actions';

import { HeaderContainer, ButtonSearch, SearchIcon } from './Header.style';
import { ButtonGray } from 'components/common/button/Button.style';
import { getPreviewFlag } from 'store/mainPage/selectors';

export const HeaderComponent: FC<HeaderProps> = ({
  data,
  resetMovieData,
  postMovieDataRequest,
  previewFlag,
}) => {
  const [open, setOpen] = useState(false);
  const setModalIsOpen = useCustomHook(open, setOpen);

  return (
    <HeaderContainer>
      <Logo />
      {data.id && previewFlag ? (
        <ButtonSearch onClick={resetMovieData}>
          <SearchIcon />
        </ButtonSearch>
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

export const Header = connect(
  (state: AppState) => ({ previewFlag: getPreviewFlag(state) }),
  {
    resetMovieData,
    postMovieDataRequest,
  }
)(HeaderComponent);
