import React from 'react';
import { connect } from 'react-redux';
import { createUrl } from '../../actions/urlActions';
import { useFormik } from 'formik';
import { func } from 'prop-types';

import './styles.css';

const UrlForm = ({ createUrl }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: values => {
      createUrl(values.url);
    },
  });
  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="url">URL</label>
        <input
          id="url"
          name="url"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.url}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

UrlForm.propTypes = {
  handleSubmit: func.isRequired
};

const mapDispatch = dispatch => ({
  createUrl: url => dispatch(createUrl(url))
});


export default connect(null, mapDispatch)(UrlForm);
