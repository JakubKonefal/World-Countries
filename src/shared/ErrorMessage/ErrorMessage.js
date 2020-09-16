import React from 'react';
import { ErrorOutline } from '@material-ui/icons';
import './ErrorMessage.scss';

const ErrorMessage = ({ label }) => (
  <div className="ErrorMessage">
    <ErrorOutline className="ErrorMessage__Icon" />
    <span className="ErrorMessage__Label">{label}</span>
  </div>
);

export default ErrorMessage;
