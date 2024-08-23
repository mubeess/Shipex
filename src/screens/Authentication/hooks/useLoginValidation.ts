import {useFormik} from 'formik';
import {loginValidationSchema} from '../schema/LoginValidationSchema';

import {useLogin} from '@shipex/hooks/useLogin';
const useLoginValidation = () => {
  const {login, loading} = useLogin();
  const initialValues = {
    usr: '',
    pwd: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async values => {
      const {usr, pwd} = values;
      await login(usr, pwd);
    },
  });
  const {handleChange, handleSubmit, values, errors} = formik;
  const {usr, pwd} = values;

  return {
    handleChange,
    handleSubmit,
    usr,
    pwd,
    usrError: formik.touched.usr && errors.usr ? errors.usr : '',
    pwdError: formik.touched.pwd && errors.pwd ? errors.pwd : '',
    loading,
  };
};

export default useLoginValidation;
