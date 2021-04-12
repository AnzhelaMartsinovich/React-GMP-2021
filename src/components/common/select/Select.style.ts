import { styled, theme } from 'theme';

export const Select = styled.select`
  background-color: ${theme.colors.gray};
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: ${theme.colors.white + theme.transparency['30']};

  &:hover {
    cursor: pointer;
  }
`;
