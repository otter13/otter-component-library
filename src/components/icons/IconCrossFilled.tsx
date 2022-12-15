import React from 'react';
import withIcon from './withIcon';

const IconCrossFilled = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5321 0.00012207L7.99891 6.53232L1.46671 0.00012207L0 1.46787L6.53116 8.00111L0 14.5323L1.46671 16L7.99891 9.46885L14.5321 16L15.9999 14.5323L9.4677 8.00111L15.9999 1.46787L14.5321 0.00012207Z"
      fill="#212129"
    />
  </svg>
);

export default withIcon(IconCrossFilled);
