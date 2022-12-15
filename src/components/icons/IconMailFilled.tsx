import React from 'react';
import withIcon from './withIcon';

const IconMailFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 21h24V3H0v18zm16-10h4V7h-4v4zM4 12h8v2H4v-2zm6 3H4v2h6v-2z" />
  </svg>
);

export default withIcon(IconMailFilled);
