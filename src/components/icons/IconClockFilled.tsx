import React from 'react';
import withIcon from './withIcon';

const IconClockFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.383 5.383 0 12 0s12 5.383 12 12-5.383 12-12 12S0 18.617 0 12zm6.293 4.293L11 11.586V5h2v7.414l-5.293 5.293-1.414-1.414z"
    />
  </svg>
);

export default withIcon(IconClockFilled);
