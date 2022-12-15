import React from 'react';
import withIcon from './withIcon';

const IconPrintOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.997 9h2.5c1.377 0 2.5 1.122 2.5 2.5V23H0V11.5C0 10.122 1.122 9 2.5 9H5V1h10.412l.292.292.002.001 2.998 2.999.001.001.292.293V9zM2 21h19.997v-9.5a.5.5 0 00-.5-.5H2.499a.5.5 0 00-.5.5V21zM6.999 3h6.999v3h3v3h-10V3zm11.998 10a1 1 0 112 0 1 1 0 01-2 0zm-2 1a1 1 0 100-2 1 1 0 000 2zM6 17h11.998a1 1 0 010 2H6a1 1 0 010-2z"
    />
  </svg>
);

export default withIcon(IconPrintOutlined);
