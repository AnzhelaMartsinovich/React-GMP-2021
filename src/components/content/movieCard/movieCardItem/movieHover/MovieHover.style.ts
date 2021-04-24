import { styled, theme } from '../../../../../theme';
import {
  MovieHoverPanelProps,
  MovieHoverItemsProps,
} from './MovieHover.interface';

export const MovieHoverPanel = styled.div<MovieHoverPanelProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  display: ${({ showIcon }) => (showIcon ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: ${theme.colors.black};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export const MovieHoverItems = styled.ul<MovieHoverItemsProps>`
  position: absolute;
  padding: 30px 0 0 0;
  width: 190px;
  background-color: ${theme.colors.black};
  list-style: none;
  right: 10px;
  z-index: 1;

  & > button {
    padding: 7px;
    left: 148px;
    top: 0;

    & > svg {
      width: 12px;
      top: 10px;
    }
  }
`;

export const MovieHoverItem = styled.li`
  padding: 10px 15px;
  color: ${theme.colors.white};
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.pink};
  }
`;

export const MovieHoverImg = styled.img`
  height: 60%;
`;
