import React from 'react';
import withIcon from './withIcon';

const IconDeliveryTimeFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12c0 6.617 5.383 12 12 12s12-5.383 12-12S18.617 0 12 0 0 5.383 0 12zm5-1a1 1 0 110 2 1 1 0 010-2zm7 7a1 1 0 110 2 1 1 0 010-2zm7-7a1 1 0 110 2 1 1 0 010-2zM7 16a1 1 0 110 2 1 1 0 010-2zM7 6a1 1 0 110 2 1 1 0 010-2zm10 0a1 1 0 110 2 1 1 0 010-2zm-4 5.586l4.707 4.707-1.414 1.414L11 12.414V4h2v7.586z"
    />
  </svg>
);

export default withIcon(IconDeliveryTimeFilled);
