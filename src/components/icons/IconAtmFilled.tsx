import React from 'react';
import withIcon from './withIcon';

const IconAtmFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5 0C22.878 0 24 1.122 24 2.5V23h-4v-2h2V2.5a.5.5 0 00-.5-.5h-19a.5.5 0 00-.5.5V21h2v2H0V2.5C0 1.122 1.122 0 2.5 0h19zM4 13h12V4H4v9zm16-7h-2V4h2v2zm-2 3h2V7h-2v2zm2 3h-2v-2h2v2zm0 3H4v2h2v7h12v-7h2v-2zm-6 7a2 2 0 012-2v-3h-2a2 2 0 11-4 0H8v3a2 2 0 012 2h4z"
    />
  </svg>
);

export default withIcon(IconAtmFilled);
