import React from 'react';
import withIcon from './withIcon';

const IconSwitchHorizontalOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.29 1.29l1.42 1.42L4.41 6H23v2H4.41l3.29 3.29-1.41 1.41-5-5a1 1 0 010-1.41l5-5zM16.3 12.7l1.41-1.41 5 5a1 1 0 010 1.41l-5 5-1.41-1.41L19.59 18H1v-2h18.59l-3.29-3.3z"
    />
  </svg>
);

export default withIcon(IconSwitchHorizontalOutlined);
