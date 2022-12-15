import React from 'react';
import withIcon from './withIcon';

const IconKeyFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.124 9.178L17.791 0H23v4.398l-1.889 2V9H19v3h-2v3l-2.15.027c.1.492.15.985.15 1.473 0 4.136-3.364 7.5-7.5 7.5S0 20.636 0 16.5C0 12.365 3.364 9 7.5 9c.548 0 1.092.06 1.624.178zM5 17a2 2 0 114.001.002A2 2 0 015 17z"
    />
  </svg>
);

export default withIcon(IconKeyFilled);
