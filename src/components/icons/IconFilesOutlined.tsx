import React from 'react';
import withIcon from './withIcon';

const IconFilesOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.535 1l2 3H21a3 3 0 013 3v13a3 3 0 01-3 3H3a3 3 0 01-3-3V1h6.535zM2 7a1 1 0 011-1h18a1 1 0 011 1v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7z"
    />
  </svg>
);

export default withIcon(IconFilesOutlined);
