import React from 'react';
import withIcon from './withIcon';

const IconMinusOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.476 10C21.87 10 23 10.89 23 12c0 1.106-1.13 2-2.524 2H3.524C2.13 14 1 13.11 1 12c0-1.106 1.13-2 2.524-2h16.952z" />
  </svg>
);

export default withIcon(IconMinusOutlined);
