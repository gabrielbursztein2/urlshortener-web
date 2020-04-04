import React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';

import './styles.css';

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;


const schema = yup.object({
  url: yup.string().required().matches(urlRegex, "Invalid URL")
});

const UrlForm = ({ handleSubmit}) => (
  <div className="form-container">
    <p className="form-titl">URL shortener</p>
    <Formik
      validationSchema={schema}
      onSubmit={values => {
        handleSubmit(values.url);
      }}
      initialValues={{ url: '' }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="validationForm">
            <Form.Control
              type="text"
              name="url"
              value={values.url}
              onChange={handleChange}
              isValid={touched.url && !errors.url}
              isInvalid={touched.url && errors.url}
              placeholder="Enter URL"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.url}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default UrlForm;
