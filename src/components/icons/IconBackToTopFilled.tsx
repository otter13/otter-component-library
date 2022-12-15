import React from 'react';
import withIcon from './withIcon';

const IconBackToTopFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.383 5.383 0 12 0s12 5.383 12 12-5.383 12-12 12S0 18.617 0 12zm6.36-.707l4.933-4.932a.999.999 0 011.414 0l4.932 4.932-1.414 1.414L13 9.482V18h-2V9.482l-3.225 3.225-1.414-1.414z"
    />
  </svg>
);

export default withIcon(IconBackToTopFilled);
