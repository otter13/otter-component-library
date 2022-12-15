import React from 'react';
import withIcon from './withIcon';

const IconDocumentFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 24V0h15.424L22 4.576V24H2zM20 6l-4-4v4h4z" />
  </svg>
);

export default withIcon(IconDocumentFilled);
