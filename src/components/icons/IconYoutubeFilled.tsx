import React from 'react';
import withIcon from './withIcon';

const IconYoutubeFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.08 16.375v-8.75l8 4.375-8 4.375zM23.209 4.322A1.64 1.64 0 0021.609 3H2.391C1.619 3 .952 3.548.79 4.326a37.7 37.7 0 00.001 15.352A1.64 1.64 0 002.391 21h19.218c.772 0 1.439-.548 1.601-1.327a37.682 37.682 0 00-.001-15.351z"
    />
  </svg>
);

export default withIcon(IconYoutubeFilled);
