import { styled, theme } from '../../../theme';
import { CrossItemProps } from './Cross.interface';

export const CrossItem = styled.div<CrossItemProps>`
  float: right;

  & > svg {
    width: 20px;
    fill: ${theme.colors.white};

    &:hover {
      cursor: pointer;
      fill: ${theme.colors.pink};
    }
  }
`;
