import SimpleForm from 'components/ui/SimpleForm';
import { useFormik } from 'formik';
import { useRedux } from 'hooks';
import React from 'react';
import { loginUser } from 'redux/auth';

export default function LoginForm() {
  const { dispatch } = useRedux();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });
  const loginFormFields = [
    {
      name: 'email',
      label: 'Email:',
    },
    {
      name: 'password',
      label: 'Password:',
      type: 'password',
    },
  ];

  return (
    <SimpleForm
      formFields={loginFormFields}
      formik={formik}
      submitBtnLabel={'Login'}
    />
  );
}
