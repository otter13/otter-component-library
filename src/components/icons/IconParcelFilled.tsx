import React from 'react';
import withIcon from './withIcon';

const IconParcelFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.996 19H9.99v-2H3.996v2zM11.988 16H3.996v-2h7.992v2z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.996 1v22H0V1h23.996zM8 2.925v4.95h7.999v-4.95h6.132v18.15H1.866V2.925H8z"
    />
  </svg>
);

export default withIcon(IconParcelFilled);
