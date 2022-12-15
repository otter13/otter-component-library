import React from 'react';
import withIcon from './withIcon';

const IconClockOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-5.707-5.707L11 11.586V5h2v7.414l-5.293 5.293-1.414-1.414z"
    />
  </svg>
);

export default withIcon(IconClockOutlined);
