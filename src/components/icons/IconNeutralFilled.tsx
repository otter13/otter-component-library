import React from 'react';
import withIcon from './withIcon';

const IconNeutralFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.383 5.383 0 12 0s12 5.383 12 12-5.383 12-12 12S0 18.617 0 12zm8-5a2 2 0 11-.001 4.001A2 2 0 018 7zm8 0a2 2 0 10.001 4.001A2 2 0 0016 7zm1 7v2H7v-2h10z"
    />
  </svg>
);

export default withIcon(IconNeutralFilled);
