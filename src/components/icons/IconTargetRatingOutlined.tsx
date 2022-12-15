import React from 'react';
import withIcon from './withIcon';

const IconTargetRatingOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.91 8H19V6h-1.09A6.008 6.008 0 0013 1.09V0h-2v1.09A6.008 6.008 0 006.09 6H5v2h1.09A6.008 6.008 0 0011 12.91V14h2v-1.09A6.008 6.008 0 0017.91 8zM13 10.858V10h-2v.858A3.995 3.995 0 018.142 8H9V6h-.858A3.995 3.995 0 0111 3.142V4h2v-.858A3.995 3.995 0 0115.858 6H15v2h.858A3.995 3.995 0 0113 10.858zM12 9a2 2 0 10.001-3.999A2 2 0 0012 9zM1 24h6v-6H1v6zm4-2H3v-2h2v2zm10 2v-9H9v9h6zm-2-2h-2v-5h2v5zm4 2h6V12h-6v12zm4-2h-2v-8h2v8z"
    />
  </svg>
);

export default withIcon(IconTargetRatingOutlined);
