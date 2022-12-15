import React from 'react';
import withIcon from './withIcon';

const IconLabel1Filled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 0v24h20V4.576L17.424 0H2zm14 2l4 4h-4V2zm-2 15h-4v-6h4v6z" />
  </svg>
);

export default withIcon(IconLabel1Filled);
