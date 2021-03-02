import { styled, theme } from '../../../theme';

export const Navs = styled.div`
  padding-bottom: 25px;
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

export const NavItem = styled.li`
  margin-right: 30px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  list-style: none;
  letter-spacing: 2px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colors.pink};
    cursor: pointer;
  }
`;
