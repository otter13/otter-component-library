import React from 'react';
import withIcon from './withIcon';

const IconScanFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 3H2v3H0V2a1 1 0 011-1h4v2zM19 1h4a1 1 0 011 1v4h-2V3h-3V1zM22 21h-3v2h4a1 1 0 001-1v-5h-2v4zM0 22v-4h2v3h3v2H1a1 1 0 01-1-1zM6 19V5H4v14h2zM15 19h-2V5h2v14zM8 19h3V5H8v14zM20 19h-3V5h3v14z" />
  </svg>
);

export default withIcon(IconScanFilled);
