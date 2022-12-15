import React from 'react';
import withIcon from './withIcon';

const IconTorchOffFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5V5H7V3.5zM7 6h10v1.697a1 1 0 01-.168.555L15 11v10a1 1 0 01-1 1h-4a1 1 0 01-1-1V11L7.168 8.252A1 1 0 017 7.697V6zm6 6h-2v2a1 1 0 102 0v-2z"
    />
  </svg>
);

export default withIcon(IconTorchOffFilled);
