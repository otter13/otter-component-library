import React from 'react';
import withIcon from './withIcon';

const IconTickThinOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.57 20c-.25 0-.5-.1-.692-.299L2 13.581l1.385-1.441 5.186 5.398L20.615 5 22 6.442 9.264 19.702A.958.958 0 018.57 20z"
    />
  </svg>
);

export default withIcon(IconTickThinOutlined);
