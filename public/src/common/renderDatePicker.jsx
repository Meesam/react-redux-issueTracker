import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'style-loader!css-loader!react-datepicker/dist/react-datepicker.css';

const renderDatePicker = ({input,label, placeholder, defaultValue, meta: {touched, error, invalid, warning } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <label  className="control-label">{label}</label>
  <div>
    <DatePicker {...input} dateForm="dd-MMM-yyyy" className='form-control' selected={input.value ? moment(input.value) : null} />
    <div className="help-block">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
  </div>
);

export default renderDatePicker