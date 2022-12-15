import React from 'react';
import withIcon from './withIcon';

const IconZoomOutFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm13.414 5.414a2 2 0 01-2.828 0l-5.077-5.077A9.932 9.932 0 0110 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10a9.932 9.932 0 01-1.663 5.509l5.077 5.077a2 2 0 010 2.828zM5 11h10V9H5v2z"
    />
  </svg>
);

export default withIcon(IconZoomOutFilled);
