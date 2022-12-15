import React from 'react';
import withIcon from './withIcon';

const IconLockOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10h.5c1.379 0 2.5 1.122 2.5 2.5V24H3V12.5C3 11.122 4.121 10 5.5 10H6V6.091C6 2.732 8.642 0 12 0s6 2.732 6 6.091V10zM5 12.5V22h14v-9.5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5zm3-6.409C8 3.835 9.744 2 12 2c2.256 0 4 1.835 4 4.091V10H8V6.091zM10 16a2 2 0 014 0c0 .738-.404 1.376-1 1.723V20h-2v-2.277c-.596-.347-1-.985-1-1.723z"
    />
  </svg>
);

export default withIcon(IconLockOutlined);
