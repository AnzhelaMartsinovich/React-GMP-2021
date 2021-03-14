import { styled } from 'theme';
import { Input } from '../../common/input/Input.style';

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBottom = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const HeaderInput = styled(Input)`
  width: 75%;
`;
