import React from 'react';
import withIcon from './withIcon';

const IconDocumentOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 0v24h20V4.576L17.424 0H2zm2 2h12v4h4v16H4V2z" />
  </svg>
);

export default withIcon(IconDocumentOutlined);
