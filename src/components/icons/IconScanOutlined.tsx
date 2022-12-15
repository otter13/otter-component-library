import React from 'react';
import withIcon from './withIcon';

const IconScanOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H2v3H0V2a1 1 0 011-1h4v2zm14-2h4a1 1 0 011 1v4h-2V3h-3V1zm3 20h-3v2h4a1 1 0 001-1v-5h-2v4zM0 22v-4h2v3h3v2H1a1 1 0 01-1-1zm6-3V5H4v14h2zm9 0h-2V5h2v14zm-7 0h3V5H8v14zm12 0h-3V5h3v14z"
    />
  </svg>
);

export default withIcon(IconScanOutlined);
