import {useFormik} from 'formik';
import Toast from 'react-native-toast-message';
import {loginValidationSchema} from '../schema/LoginValidationSchema';
const useLoginValidation = () => {
  const initialValues = {
    usr: '',
    pwd: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async values => {
      const {usr, pwd} = values;
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
  };
};

export default useLoginValidation;
