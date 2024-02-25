import React from 'react';
import { Formik } from 'formik';
import { Form, SubmitBtn, Title } from './AddForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';

const AddForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    const formData = {
      name: values.name,
      phone: values.phone,
      email: values.email,
    };
    dispatch(addContact(formData));
    onClose();
  };
  return (
    <>
      <Title>Add new contact</Title>
      <Formik
        initialValues={{ name: '', phone: '', email: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.phone) {
            errors.phone = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm, isValid }) => {
          if (!isValid) {
            setSubmitting(false);
            toast.error('Please enter a valid data');
            return;
          }
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          handleSubmit(values);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? 'error' : ''}
                value={values.name}
              />
              {errors.name && touched.name && <span>{errors.name}</span>}
            </label>
            <label>
              Phone number:
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? 'error' : ''}
                pattern="[0-9+ -]*"
                title="Please enter a valid phone number"
                value={values.phone}
              />
              {errors.phone && touched.phone && <span>{errors.phone}</span>}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'error' : ''}
                value={values.email}
              />
              {errors.email && touched.email && <span>{errors.email}</span>}
            </label>
            <SubmitBtn type="submit" disabled={!isValid || isSubmitting}>
              Add
            </SubmitBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddForm;
