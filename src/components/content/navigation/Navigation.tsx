import React, { FC } from 'react';

import { NavigationProps } from './Navigation.interface';

import { Navs, NavGenre, NavSort, NavItem } from './Navigation.style';

export const Navigation: FC<NavigationProps> = ({
  navGenreData,
  navSortData,
}) => (
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
