import React from 'react';
import withIcon from './withIcon';

const IconFilterOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.83 5a3.001 3.001 0 01-5.66 0H1a1 1 0 010-2h5.17a3.001 3.001 0 015.66 0H23a1 1 0 110 2H11.83zM1 10a1 1 0 100 2h11.17a3.001 3.001 0 005.66 0H23a1 1 0 100-2h-5.17a3.001 3.001 0 00-5.66 0H1zm-1 9a1 1 0 011-1h3.17a3.001 3.001 0 015.66 0H23a1 1 0 110 2H9.83a3.001 3.001 0 01-5.66 0H1a1 1 0 01-1-1z"
    />
  </svg>
);

export default withIcon(IconFilterOutlined);
