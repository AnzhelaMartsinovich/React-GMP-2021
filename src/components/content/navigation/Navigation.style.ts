import { Select } from 'components/common/select/Select.style';
import { styled, theme } from 'theme';
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

  & li:first-child {
    color: ${theme.colors.grayBg};
  }

  & li:last-child {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 25px;
      right: -20px;
      border: 6px solid transparent;
      border-top: 6px solid ${theme.colors.pink};
    }
  }
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

  &:hover {
    color: ${theme.colors.pink};
    cursor: pointer;
  }
`;

export const NavSelect = styled(Select)`
  color: ${theme.colors.white};
  text-transform: uppercase;
`;

export const NavOption = styled.option``;
