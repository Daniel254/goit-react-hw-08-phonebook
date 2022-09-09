import SimpleForm from 'components/ui/SimpleForm';
import { useFormik } from 'formik';
import { useRedux } from 'hooks';
import React from 'react';
import { registerUser } from 'redux/auth';

export default function RegistrationForm() {
  const { dispatch } = useRedux();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(registerUser(values));
    },
  });

  const formFields = [
    {
      label: 'Name:',
      name: 'name',
    },
    {
      label: 'Email:',
      name: 'email',
    },
    {
      label: 'Password:',
      name: 'password',
      type: 'password',
    },
  ];
  return (
    <SimpleForm
      formFields={formFields}
      submitBtnLabel={'Sign up'}
      formik={formik}
    />
  );
}
