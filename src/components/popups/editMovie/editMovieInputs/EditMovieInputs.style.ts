import { styled, theme } from 'theme';
import { Input } from 'components/common/input/Input.style';

export const EditMovieInputItem = styled.div`
  margin-bottom: 30px;
`;

export const EditMovieInput = styled(Input)`
  margin-top: 15px;
  background-color: ${theme.colors.gray};
  width: 95%;
`;
