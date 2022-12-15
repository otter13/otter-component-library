import React from 'react';
import withIcon from './withIcon';

const IconAddStreetAddressFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.35 23A8.988 8.988 0 017 16c0-4.962 4.037-9 9-9 .53 0 1.05.046 1.554.134L11.652 1.27a.925.925 0 00-1.304 0L0 11.553l1.304 1.296L2.7 11.463v9.245A2.301 2.301 0 005.005 23h5.344z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 16c0 3.859 3.14 7 7 7s7-3.141 7-7-3.14-7-7-7-7 3.141-7 7zm6-1v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"
    />
  </svg>
);

export default withIcon(IconAddStreetAddressFilled);
