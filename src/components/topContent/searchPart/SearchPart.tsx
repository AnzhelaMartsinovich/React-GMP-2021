import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FIND_YOUR_MOVIE, SEARCH, PLACEHOLDER_TEXT } from 'utils/constants';
import { SearchPartProps } from '../TopContent.interface';

import { SearchPartContainer, HeaderInput } from './SearchPart.style';
import { ButtonPink } from 'components/common/button/Button.style';
import { Title1 } from 'components/common/title/Title.style';

export const SearchPart: FC<SearchPartProps> = ({
  setSearchValue,
  searchValue,
}) => {
  const [value, setValue] = useState(searchValue);
  const history = useHistory();
  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchButtonHandler = () => {
    value && history.push(`/search?search=${value}`);
    setSearchValue(value);
  };

  return (
    <SearchPartContainer>
      <Title1>{FIND_YOUR_MOVIE}</Title1>
      <HeaderInput
        placeholder={PLACEHOLDER_TEXT}
        onChange={searchInputHandler}
        value={value}
      />
      <ButtonPink onClick={searchButtonHandler}>{SEARCH}</ButtonPink>
    </SearchPartContainer>
  );
};
