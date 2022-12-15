import React from 'react';
import withIcon from './withIcon';

const IconNeutralOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zM8 7a2 2 0 11-.001 4.001A2 2 0 018 7zm8 0a2 2 0 10.001 4.001A2 2 0 0016 7zm1 7v2H7v-2h10z"
    />
  </svg>
);

export default withIcon(IconNeutralOutlined);
