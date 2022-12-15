import React from 'react';
import withIcon from './withIcon';

const IconTargetRatingFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 7a2 2 0 11-3.999.001A2 2 0 0114 7z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 8h-1.09A6.008 6.008 0 0113 12.91V14h-2v-1.09A6.008 6.008 0 016.09 8H5V6h1.09A6.008 6.008 0 0111 1.09V0h2v1.09A6.008 6.008 0 0117.91 6H19v2zm-6 2v.858A3.995 3.995 0 0015.858 8H15V6h.858A3.995 3.995 0 0013 3.142V4h-2v-.858A3.995 3.995 0 008.142 6H9v2h-.858A3.995 3.995 0 0011 10.858V10h2z"
    />
    <path d="M7 24H1v-6h6v6zM15 24v-9H9v9h6zM23 24h-6V12h6v12z" />
  </svg>
);

export default withIcon(IconTargetRatingFilled);
