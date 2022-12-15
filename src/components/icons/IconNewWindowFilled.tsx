import React from 'react';
import withIcon from './withIcon';

const IconNewWindowFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 21.58c0 .23-.19.42-.42.42H2.42c-.23 0-.42-.19-.42-.42V7.42c0-.23.19-.42.42-.42h10.33l2-2H2.42C1.08 5 0 6.08 0 7.42v14.16C0 22.92 1.08 24 2.42 24h14.16c1.34 0 2.42-1.08 2.42-2.42V9.25l-2 2v10.33zM24 1v9h-2V3.414l-8.293 8.293-1.414-1.414L20.586 2H14V0h9a1 1 0 011 1z"
    />
  </svg>
);

export default withIcon(IconNewWindowFilled);
