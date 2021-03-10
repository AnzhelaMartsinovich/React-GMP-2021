import { styled, theme } from '../../../theme';
import { ButtonProps } from './Button.interface';

export const Button = styled.button<ButtonProps>`
  text-transform: uppercase;
  border: 2px solid transparent;
  outline: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 17px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonGray = styled(Button)`
  padding: 15px 20px;
  color: ${theme.colors.pink};
  background-color: ${theme.colors.grayBg};

  &:hover {
    background-color: ${theme.colors.grayBg + theme.transparency['70']};
  }
`;

export const ButtonBlack = styled(Button)`
  color: ${theme.colors.pink};
  background-color: transparent;
  border: 2px solid ${theme.colors.pink};

  &:hover {
    background-color: ${theme.colors.grayBg + theme.transparency['70']};
  }
`;

export const ButtonPink = styled(Button)`
  margin-left: 15px;
  padding: 20px 70px;
  background-color: ${theme.colors.pink};
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.pink + theme.transparency['70']};
  }
`;
