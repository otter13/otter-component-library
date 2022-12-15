import React from 'react';
import withIcon from './withIcon';

const IconUserOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 6c0 2.987 1.7 6 5.5 6 2.738 0 5.5-1.855 5.5-6 0-2.987-1.7-6-5.5-6C9.762 0 7 1.855 7 6zm15 16.042a8.036 8.036 0 00-2.53-5.076C18.101 15.69 15.378 15 12 15s-6.101.69-7.47 1.966A8.036 8.036 0 002 22.042h20zM24 24H0v-.979c0-2.967 1.081-5.609 3.045-7.44C5.455 13.336 9.69 13 12 13c2.31 0 6.545.335 8.955 2.582C22.92 17.412 24 20.054 24 23.022V24zM12.5 2C10.374 2 9 3.57 9 6c0 2.43 1.374 4 3.5 4S16 8.43 16 6c0-2.43-1.374-4-3.5-4z"
    />
  </svg>
);

export default withIcon(IconUserOutlined);
