import React from 'react';
import withIcon from './withIcon';

const IconAddCustomerOutlined = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="3 3 34 34" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5 26C21.0546 26 21.5 25.4348 21.5 24.738V21.5H24.738C25.4346 21.5 26 21.0531 26 20.5C26 19.9454 25.4348 19.5 24.738 19.5H21.5V16.262C21.5 15.5654 21.0531 15 20.5 15C19.9454 15 19.5 15.5652 19.5 16.262V19.5H16.262C15.5654 19.5 15 19.9469 15 20.5C15 21.0546 15.5652 21.5 16.262 21.5H19.5V24.738C19.5 25.4346 19.9469 26 20.5 26Z"
      fill="currentColor"
    />
    <circle cx="20.5" cy="20.5" r="14.5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

export default withIcon(IconAddCustomerOutlined);
