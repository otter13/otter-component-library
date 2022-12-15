import React from 'react';
import withIcon from './withIcon';

const IconLabel1Outlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.424 0H2v24h20V4.576L17.424 0zM20 22H4V2h12v4h4v16zm-6-7h-4V9h4v6z"
    />
  </svg>
);

export default withIcon(IconLabel1Outlined);
