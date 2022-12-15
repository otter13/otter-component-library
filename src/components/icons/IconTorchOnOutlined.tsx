import React from 'react';
import withIcon from './withIcon';

const IconTorchOnOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1a1 1 0 112 0v2a1 1 0 11-2 0V1zM7.5 5a.5.5 0 00-.5.5V7h10V5.5a.5.5 0 00-.5-.5h-9zM7 8v1.697a1 1 0 00.168.555L9 13v10a1 1 0 001 1h4a1 1 0 001-1V13l1.832-2.748A1 1 0 0017 9.697V8H7zm9-7a1 1 0 00-1 1v1a1 1 0 102 0V2a1 1 0 00-1-1zM7 2a1 1 0 012 0v1a1 1 0 01-2 0V2zm5 14a1 1 0 00-1 1v2h2v-2a1 1 0 00-1-1z"
    />
  </svg>
);

export default withIcon(IconTorchOnOutlined);
