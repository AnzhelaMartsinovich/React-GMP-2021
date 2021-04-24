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
  }
`;

export const CrossImg = styled.img`
  width: 16px;
  border: 1px solid transparent;
  padding: 2px;

  &:hover {
    border: 1px solid ${theme.colors.pink};
    border-radius: 2px;
  }
`;
