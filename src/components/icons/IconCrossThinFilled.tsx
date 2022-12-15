import React from 'react';
import withIcon from './withIcon';

const IconCrossThinFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5321 4.00009L11.9989 10.5323L5.46671 4.00009L4 5.46784L10.5312 12.0011L4 18.5322L5.46671 20L11.9989 13.4688L18.5321 20L19.9999 18.5322L13.4677 12.0011L19.9999 5.46784L18.5321 4.00009Z"
    />
  </svg>
);

export default withIcon(IconCrossThinFilled);
