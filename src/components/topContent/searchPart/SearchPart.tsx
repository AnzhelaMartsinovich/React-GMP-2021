import React, { FC } from 'react';

import { FIND_YOUR_MOVIE, SEARCH, PLACEHOLDER_TEXT } from 'utils/constants';

import { SearchPartContainer, HeaderInput } from './SearchPart.style';
import { ButtonPink } from 'components/common/button/Button.style';
import { Title1 } from 'components/common/title/Title.style';

export const SearchPart: FC = () => {
  return (
    <SearchPartContainer>
      <Title1>{FIND_YOUR_MOVIE}</Title1>
      <HeaderInput placeholder={PLACEHOLDER_TEXT} />
      <ButtonPink>{SEARCH}</ButtonPink>
    </SearchPartContainer>
  );
};
