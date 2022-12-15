import React from 'react';
import withIcon from './withIcon';

const IconLockFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 10H18V6.091C18 2.732 15.358 0 12 0S6 2.732 6 6.091V10h-.5A2.503 2.503 0 003 12.5V24h18V12.5c0-1.378-1.121-2.5-2.5-2.5zM8 6.091C8 3.835 9.744 2 12 2c2.256 0 4 1.835 4 4.091V10H8V6.091zM10 16a2 2 0 014 0c0 .738-.404 1.376-1 1.723V20h-2v-2.277c-.596-.347-1-.985-1-1.723z"
    />
  </svg>
);

export default withIcon(IconLockFilled);
