import React from 'react';
import withIcon from './withIcon';

const IconDirectionsFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.52.63a2.148 2.148 0 00-3.04 0L.63 10.48a2.148 2.148 0 000 3.04l9.85 9.85c.84.84 2.2.84 3.04 0l9.85-9.85c.84-.84.84-2.2 0-3.04L13.52.63zM14 7v3H8a1 1 0 00-1 1v5h2v-4h5v3l4-4-4-4z"
    />
  </svg>
);

export default withIcon(IconDirectionsFilled);
