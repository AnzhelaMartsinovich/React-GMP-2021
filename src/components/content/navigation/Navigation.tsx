import React, { FC, useState } from 'react';

import { navGenreData, navSortData } from 'utils/navData';
import { NavigationProps } from './Navigation.interface';

import {
  Navs,
  NavGenre,
  NavSort,
  NavItem,
  NavSelect,
  NavOption,
} from './Navigation.style';

export const Navigation: FC<NavigationProps> = ({
  saveSortValue,
  saveFilterValue,
}) => {
  const [current, setCurrent] = useState(1);

  const handlerClick = (e: Record<string, any>) => {
    setCurrent(e.target.id);
  };

  const sortPanelSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = e.target.value;
    saveSortValue(sortByValue);
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
        <NavItem key={navSortData[0].id} id={navSortData[0].id}>
          {navSortData[0].text}
        </NavItem>
        <NavItem key={navSortData[1].id} id={navSortData[1].id}>
          <NavSelect
            onChange={sortPanelSelectHandler}
            defaultValue={navSortData[1].text}
          >
            <NavOption>{navSortData[1].text}</NavOption>
            <NavOption>{navSortData[2].text}</NavOption>
          </NavSelect>
        </NavItem>
      </NavSort>
    </Navs>
  );
};
