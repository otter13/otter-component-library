import React from 'react';
import withIcon from './withIcon';

const IconPrintFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3H7v6h10V6h-3V3zm5 6h2.5c1.378 0 2.5 1.122 2.5 2.5V23H0V11.5C0 10.122 1.122 9 2.5 9H5V1h10.414l.293.293 3 3 .293.293V9zm2 9H3v2h18v-2zm-2-4h2v2h-2v-2zm-1 2v-2h-2v2h2z"
    />
  </svg>
);

export default withIcon(IconPrintFilled);
