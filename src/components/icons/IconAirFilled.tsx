import React from 'react';
import withIcon from './withIcon';

const IconAirFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.308 7.538h-4.113L13.19 3.022A2.298 2.298 0 0011.267 2H6.101l2.587 5.538H4.819L3.32 4.77H0v6.48c0 .986.385 1.907 1.083 2.603a3.664 3.664 0 002.61 1.071h.011l5.1-.01-2.623 6.472H11.195c.83 0 1.598-.443 2.005-1.155l3.029-5.307h4.079A3.696 3.696 0 0024 11.231a3.696 3.696 0 00-3.692-3.693z"
    />
  </svg>
);

export default withIcon(IconAirFilled);
