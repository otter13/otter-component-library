import React from 'react';
import withIcon from './withIcon';

const IconUnlockFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 6.091C13 2.675 15.416 0 18.5 0S24 2.675 24 6.091V8h-2V6.091C22 3.797 20.462 2 18.5 2S15 3.797 15 6.091V10h.5c1.378 0 2.5 1.122 2.5 2.5V24H0V12.5C0 11.122 1.122 10 2.5 10H13V6.091zM8 20v-2.277c-.595-.347-1-.984-1-1.723a2 2 0 014 0c0 .739-.405 1.376-1 1.723V20H8z"
    />
  </svg>
);

export default withIcon(IconUnlockFilled);
