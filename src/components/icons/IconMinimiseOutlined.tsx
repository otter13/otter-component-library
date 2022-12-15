import React from 'react';
import withIcon from './withIcon';

const IconMinimiseOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.293 8.293V2.707h-2v8a1 1 0 001 1h8v-2h-5.586L24 1.414 22.586 0l-8.293 8.293zm-6 6H2.707v-2h8a1 1 0 011 1v8h-2v-5.586L1.414 24 0 22.586l8.293-8.293z"
    />
  </svg>
);

export default withIcon(IconMinimiseOutlined);
