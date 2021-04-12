import { styled, theme } from 'theme';
import { CrossItemProps } from './Cross.interface';

export const CrossItem = styled.button<CrossItemProps>`
  position: absolute;
  right: 50px;
  top: 30px;
  background-color: transparent;
  border: 0;
  outline: 0;

  &:hover {
    cursor: pointer;

    & > svg {
      fill: ${theme.colors.pink};
    }
  }

  & > svg {
    width: 20px;
    fill: ${theme.colors.white};
  }
`;
