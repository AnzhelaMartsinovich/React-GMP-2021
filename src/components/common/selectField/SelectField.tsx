import { useField } from 'formik';

import { Label } from 'components/common/label/Label.style';
import { Error } from 'components/common/errorMessage/ErrorMessage.style';
import { SelectStyled } from './SelectField.style';

export const SelectField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>
        {label}
        <SelectStyled {...field} {...props} multiple />
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </Label>
    </>
  );
};
