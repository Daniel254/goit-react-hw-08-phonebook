import PropTypes from 'prop-types';
import React from 'react';
import { Button, Input, InputError, LabelName } from './SimpleForm.styled';
function SimpleForm({
  formFields,
  submitBtnLabel = 'Submit',
  formik,
  autoComplete = 'on',
}) {
  return (
    <form onSubmit={formik.handleSubmit} autoComplete={autoComplete}>
      {formFields.map(({ label, name, type = 'text' }, index) => (
        <React.Fragment key={index}>
          <LabelName>
            {label}
            <Input type={type} {...formik.getFieldProps(name)} />
          </LabelName>
          <InputError name="name" component="p" />
        </React.Fragment>
      ))}

      <Button type="submit">{submitBtnLabel}</Button>
    </form>
  );
}

SimpleForm.propTypes = {
  formFields: PropTypes.array.isRequired,
  submitBtnLabel: PropTypes.string,
  formik: PropTypes.object,
  autoComplete: PropTypes.string,
  // [
  //   {
  //     label: 'Label Name',
  //     name: 'defaultName',
  //     type: 'text',
  //   },
  // ]
};

export default SimpleForm;
