import React from 'react';
import withIcon from './withIcon';

const IconCreditCardOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 15.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0120 15.5zm-3 0a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0117 15.5zM4 17h6v-2H4v2zm17.5 2h-19a.501.501 0 01-.5-.5V11h20v7.5c0 .275-.225.5-.5.5zM2 5.5c0-.275.225-.5.5-.5h19c.275 0 .5.225.5.5V8H2V5.5zM21.5 3h-19A2.502 2.502 0 000 5.5v13C0 19.879 1.121 21 2.5 21h19c1.379 0 2.5-1.121 2.5-2.5v-13C24 4.121 22.879 3 21.5 3z"
    />
  </svg>
);

export default withIcon(IconCreditCardOutlined);
