import React, { FC, useState } from 'react';

import { NavigationProps } from './Navigation.interface';

import { Navs, NavGenre, NavSort, NavItem } from './Navigation.style';

export const Navigation: FC<NavigationProps> = ({
  navGenreData,
  navSortData,
}) => {
  const [current, setCurrent] = useState(1);

  const handlerClick = (e: Record<string, any>) => {
    setCurrent(e.target.id);
  };

  return (
    <Navs>
      <NavGenre>
        {navGenreData.map(({ id, text }) => (
          <NavItem
            key={id}
            id={id}
            onClick={handlerClick}
            active={id === +current}
          >
            {text}
          </NavItem>
        ))}
      </NavGenre>

      <NavSort>
        {navSortData.map(({ id, text }) => (
          <NavItem key={id} id={id}>
            {text}
          </NavItem>
        ))}
      </NavSort>
    </Navs>
  );
};
