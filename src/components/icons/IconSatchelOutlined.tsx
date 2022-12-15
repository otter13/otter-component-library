import React from 'react';
import withIcon from './withIcon';

const IconSatchelOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M21 6h-3v3h3V6zm1 5H2v8h20v-8zM2 4H0v17h24V4H2zm2 9h6v4H4v-4z" />
  </svg>
);

export default withIcon(IconSatchelOutlined);
