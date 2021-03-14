import { styled } from 'theme';
import { ButtonBlack, ButtonPink } from '../Button.style';

export const ButtonsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonLeft = styled(ButtonBlack)`
  padding: 15px 50px;
`;

export const ButtonRight = styled(ButtonPink)`
  padding: 15px 50px;
`;
