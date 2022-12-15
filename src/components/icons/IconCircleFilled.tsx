import React from 'react';
import withIcon from './withIcon';

const IconCircleFilled = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="12" strokeWidth="2" />
  </svg>
);

export default withIcon(IconCircleFilled);
