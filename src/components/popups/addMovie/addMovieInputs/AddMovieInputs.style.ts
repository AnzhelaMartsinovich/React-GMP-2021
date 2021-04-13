import { styled, theme } from 'theme';
// import { Input } from 'components/common/input/Input.style';
import { Field } from 'formik';

export const AddMovieInputItem = styled.div`
  margin-bottom: 30px;
`;

export const AddMovieInput = styled(Field)`
  margin-top: 15px;
  background-color: ${theme.colors.gray};
  width: 95%;
`;
