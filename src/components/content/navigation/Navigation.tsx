import React, { FC } from 'react';

import { navGenreData, navSortData } from '../../../utils/navData';

import { Navs, NavGenre, NavSort, NavItem } from './Navigation.style';

export const Navigation: FC = () => (
  <Navs>
    <NavGenre>
      {navGenreData.map(({ id, text }) => (
        <NavItem key={id}>{text}</NavItem>
      ))}
    </NavGenre>

    <NavSort>
      {navSortData.map(({ id, text }) => (
        <NavItem key={id}>{text}</NavItem>
      ))}
    </NavSort>
  </Navs>
);
