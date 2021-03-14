import { styled, theme } from 'theme';

export const HeaderContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonSearch = styled.button`
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchIcon = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  border: 2px solid ${theme.colors.pink};
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    height: 10px;
    width: 2px;
    background-color: ${theme.colors.pink};
    bottom: -8px;
    transform: rotate(45deg);
    left: -3px;
  }
`;
