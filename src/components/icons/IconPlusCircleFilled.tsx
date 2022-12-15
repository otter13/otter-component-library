import React from 'react';
import withIcon from './withIcon';

const IconPlusCircleFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0-6.617-5.383-12-12-12S0 5.383 0 12s5.383 12 12 12 12-5.383 12-12zm-13-1V6h2v5h5v2h-5v5h-2v-5H6v-2h5z"
    />
  </svg>
);

export default withIcon(IconPlusCircleFilled);
