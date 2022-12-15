import React from 'react';
import withIcon from './withIcon';

const IconContentFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 0h19C22.879 0 24 1.121 24 2.5V23H0V2.5C0 1.121 1.121 0 2.5 0zM18 18h-8v-2h8v2zM5 17v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H6a1 1 0 00-1 1zm11-3h-6v-2h6v2zM5 13v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H6a1 1 0 00-1 1zm14-3h-9V8h9v2zM5 9v1a1 1 0 001 1h1a1 1 0 001-1V9a1 1 0 00-1-1H6a1 1 0 00-1 1zm17-7H2v3h20V2z"
    />
  </svg>
);

export default withIcon(IconContentFilled);
