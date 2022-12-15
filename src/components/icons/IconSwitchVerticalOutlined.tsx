import React from 'react';
import withIcon from './withIcon';

const IconSwitchVerticalOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.71 1.29l5 5-1.42 1.41L18 4.41V23h-2V4.41L12.71 7.7 11.3 6.29l5-5a1 1 0 011.41 0zM8 1v18.59l3.29-3.29 1.41 1.41-5 5a1 1 0 01-1.41 0l-5-5 1.42-1.42L6 19.59V1h2z"
    />
  </svg>
);

export default withIcon(IconSwitchVerticalOutlined);
