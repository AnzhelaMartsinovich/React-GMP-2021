import { styled, theme } from '../../../theme';

export const Button = styled.button`
  text-transform: uppercase;
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 17px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonAdd = styled(Button)`
  padding: 15px 20px;
  color: ${theme.colors.pink};
  background-color: ${theme.colors.grayBg};

  &:hover {
    background-color: ${theme.colors.grayBg + theme.transparency['70']};
  }
`;

export const ButtonSearch = styled(Button)`
  margin-left: 15px;
  padding: 20px 70px;
  background-color: ${theme.colors.pink};
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.pink + theme.transparency['70']};
  }
`;
