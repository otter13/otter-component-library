import React from 'react';
import withIcon from './withIcon';

const IconLabel4Outlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 24V0h15.424L22 4.577V24H2zM16 2H4v20.001h16V6h-4V2zM7 20h4v-5H7v5zm10 0h-4v-5h4v5zM7 13h4V8H7v5zm10 0h-4V8h4v5z"
    />
  </svg>
);

export default withIcon(IconLabel4Outlined);
