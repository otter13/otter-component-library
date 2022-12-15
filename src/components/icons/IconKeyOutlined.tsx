import React from 'react';
import withIcon from './withIcon';

const IconKeyOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.791 0l-8.667 9.178A7.496 7.496 0 008.5 9C4.364 9 1 12.365 1 16.5 1 20.636 4.364 24 8.5 24s7.5-3.364 7.5-7.5c0-.488-.05-.981-.15-1.473L18 15v-3h2V9h2.111V6.398l1.889-2V0h-5.209zM22 3.603l-1.889 2V7H18v3h-2v3h-.987l-1.378 1.46.154.546c.14.499.211 1.001.211 1.494 0 3.033-2.467 5.5-5.5 5.5A5.506 5.506 0 013 16.5a5.506 5.506 0 017.145-5.249l.596.186L19.653 2H22v1.603zM6 17a2 2 0 114.001.002A2 2 0 016 17z"
    />
  </svg>
);

export default withIcon(IconKeyOutlined);
