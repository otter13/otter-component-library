import React from 'react';
import withIcon from './withIcon';

const IconInfoOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.383 5.383 0 12 0s12 5.383 12 12-5.383 12-12 12S0 18.617 0 12zm2 0c0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2 2 6.486 2 12zm10-3a1.5 1.5 0 10.002-2.999A1.5 1.5 0 0012 9zm0 1a1 1 0 011 1v4h1v2h-4v-2h1v-3h-1v-2h2z"
    />
  </svg>
);

export default withIcon(IconInfoOutlined);
