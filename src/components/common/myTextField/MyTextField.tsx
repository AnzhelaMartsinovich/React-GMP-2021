import { useField } from 'formik';

import { Label } from 'components/common/label/Label.style';
// переписать потом на общие стили
import { AddMovieInput } from 'components/popups/addMovie/addMovieInputs/AddMovieInputs.style';
import { Error } from 'components/common/errorMessage/ErrorMessage.style';

export const MyTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label>
        {label}
        <AddMovieInput {...field} {...props} />
      </Label>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};
