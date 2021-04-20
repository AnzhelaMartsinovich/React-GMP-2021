import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FIND_YOUR_MOVIE, SEARCH, PLACEHOLDER_TEXT } from 'utils/constants';

import { SearchPartContainer, HeaderInput } from './SearchPart.style';
import { ButtonPink } from 'components/common/button/Button.style';
import { Title1 } from 'components/common/title/Title.style';

export const SearchPart = ({ getMoviesDataRequest }: any) => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
    value && history.push(`/search?search=${value}`);
  };

  return (
    <SearchPartContainer>
      <Title1>{FIND_YOUR_MOVIE}</Title1>
      <HeaderInput
        placeholder={PLACEHOLDER_TEXT}
        onChange={searchInputHandler}
      />
      <ButtonPink onClick={searchButtonHandler}>{SEARCH}</ButtonPink>
    </SearchPartContainer>
  );
};
