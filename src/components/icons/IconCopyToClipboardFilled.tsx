import React from 'react';
import withIcon from './withIcon';

const IconCopyToClipboardFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 8.5V10h-2V8.5a.5.5 0 00-.5-.5H20V6h1.5C22.878 6 24 7.121 24 8.5zM22 18h2v-6h-2v6zM22 20h2v1.5c0 1.379-1.122 2.5-2.5 2.5H20v-2h1.5a.5.5 0 00.5-.5V20zM12 24h6v-2h-6v2zM8.5 22H10v2H8.5A2.503 2.503 0 016 21.5V20h2v1.5a.5.5 0 00.5.5z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 0h-13A2.503 2.503 0 000 2.5v13C0 16.879 1.122 18 2.5 18h13c1.378 0 2.5-1.121 2.5-2.5v-13C18 1.121 16.878 0 15.5 0zM10 8h3v2h-3v3H8v-3H5V8h3V5h2v3z"
    />
  </svg>
);

export default withIcon(IconCopyToClipboardFilled);
