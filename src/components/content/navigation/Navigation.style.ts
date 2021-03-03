import { styled, theme } from '../../../theme';
import { NavItemProps } from './Navigation.interface';

export const Navs = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black;
`;

export const NavGenre = styled.nav`
  display: flex;
`;

export const NavSort = styled.nav`
  display: flex;
`;

export const NavItem = styled.li<NavItemProps>`
  margin-right: 30px;
  padding-bottom: 25px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  list-style: none;
  letter-spacing: 2px;
  border-bottom: ${({ active }) =>
    active ? `3px solid ${theme.colors.pink}` : '3px solid transparent'};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colors.pink};
    cursor: pointer;
  }
`;
