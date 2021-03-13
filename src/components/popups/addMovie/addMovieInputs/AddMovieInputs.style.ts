import { styled, theme } from '../../../../theme';
import { Input } from '../../../common/input/Input.style';

export const AddMovieInputItem = styled.div`
  margin-bottom: 30px;
`;

export const AddMovieInput = styled(Input)`
  margin-top: 15px;
  background-color: ${theme.colors.gray};
  width: 95%;
`;
