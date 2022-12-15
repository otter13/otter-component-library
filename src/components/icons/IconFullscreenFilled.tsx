import React from 'react';
import withIcon from './withIcon';

const IconFullscreenFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.586 2H15V0h8a1 1 0 011 1v8h-2V3.414l-8.293 8.293-1.414-1.414L20.586 2zm-8.879 11.707l-1.414-1.414L2 20.586V15H0v8a1 1 0 001 1h8v-2H3.414l8.293-8.293z"
    />
  </svg>
);

export default withIcon(IconFullscreenFilled);
