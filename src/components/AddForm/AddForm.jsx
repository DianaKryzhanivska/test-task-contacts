import React from 'react';
import { Formik } from 'formik';
import { Form, SubmitBtn, Title } from './AddForm.styled';
import { toast } from 'react-toastify';

const AddForm = () => {
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('submit', values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          resetForm();
          toast.success(`Contact ${values.name} succesfully added!`);
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
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? 'error' : ''}
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
            <SubmitBtn type="submit" disabled={isSubmitting}>
              Add
            </SubmitBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddForm;
