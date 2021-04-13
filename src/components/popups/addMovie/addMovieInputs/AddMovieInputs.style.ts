import { Field } from 'formik';

import { styled, theme } from 'theme';
// import { Input } from 'components/common/input/Input.style';

export const AddMovieInputItem = styled.div`
  margin-bottom: 30px;
`;

export const AddMovieInput = styled(Field)`
  margin-top: 15px;
  background-color: ${theme.colors.gray};
  width: 95%;
  // from Input
  padding: 20px 15px;
  outline: none;
  border: none;
  color: ${theme.colors.white};
  border-radius: 4px;
  font-size: 18px;
`;
