import React from 'react';
import withIcon from './withIcon';

const IconShareFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 15a3.974 3.974 0 00-2.673 1.045l-7.364-3.682C8.974 12.242 9 12.124 9 12c0-.446-.09-.868-.226-1.269l6.934-3.467A3.995 3.995 0 0023 5c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 .124.026.242.037.363L7.673 9.045A3.974 3.974 0 005 8c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.365 0 2.57-.689 3.292-1.736l6.934 3.467A3.932 3.932 0 0015 19c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4z"
    />
  </svg>
);

export default withIcon(IconShareFilled);
