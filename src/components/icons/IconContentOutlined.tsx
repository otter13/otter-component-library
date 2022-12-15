import React from 'react';
import withIcon from './withIcon';

const IconContentOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 19h8v-2h-8v2zm-5 0v-1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1zm5-4h6v-2h-6v2zm-5 0v-1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1zm5-4h9V9h-9v2zm-5 0v-1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1zM2 22h20V6H2v16zM21.5 1h-19A2.502 2.502 0 000 3.5V24h24V3.5C24 2.121 22.879 1 21.5 1z"
    />
  </svg>
);

export default withIcon(IconContentOutlined);
