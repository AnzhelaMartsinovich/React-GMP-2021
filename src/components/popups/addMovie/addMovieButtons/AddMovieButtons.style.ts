import { styled } from '../../../../theme';
import { ButtonBlack, ButtonPink } from '../../../common/button/Button.style';

export const ButtonsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonReset = styled(ButtonBlack)`
  padding: 15px 50px;
`;

export const ButtonSubmit = styled(ButtonPink)`
  padding: 15px 50px;
`;
