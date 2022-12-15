import React from 'react';
import withIcon from './withIcon';

const IconSecureFilesFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.535 0l2 3H21a3 3 0 013 3v13a3 3 0 01-3 3H3a3 3 0 01-3-3V0h6.535zM17 10v2h-2v-2c0-.565.466-1 1-1s1 .435 1 1zm2 0v2h.5a1.5 1.5 0 011.5 1.5V19H11v-5.5a1.5 1.5 0 011.5-1.5h.5v-2c0-1.702 1.391-3 3-3s3 1.298 3 3zM2 3V1h3l1 2H2z"
    />
    <path d="M15 14h2v3h-2z" />
  </svg>
);

export default withIcon(IconSecureFilesFilled);
