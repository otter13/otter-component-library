import React from 'react';
import withIcon from './withIcon';

const IconCalculatorFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 0c1.379 0 2.5 1.122 2.5 2.5v19c0 1.378-1.121 2.5-2.5 2.5H5a2.503 2.503 0 01-2.5-2.5v-19C2.5 1.122 3.621 0 5 0h14zM6.5 9h11V4h-11v5zm11 4h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0h-3v-2h3v2zm5 3h3v-2h-3v2zm-1 0h-3v-2h3v2zm-7 0h3v-2h-3v2zm11 3h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0h-3v-2h3v2z"
    />
  </svg>
);

export default withIcon(IconCalculatorFilled);
