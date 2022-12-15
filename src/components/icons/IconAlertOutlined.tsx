import React from 'react';
import withIcon from './withIcon';

const IconAlertOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c6.628 0 12-5.373 12-12S18.628 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.054 14.973c.83 0 1.5-.67 1.5-1.5v-7.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v7.5c0 .83.67 1.5 1.5 1.5zm-1.554 3a1.526 1.526 0 103.053.001 1.526 1.526 0 00-3.053-.001z"
    />
  </svg>
);

export default withIcon(IconAlertOutlined);
