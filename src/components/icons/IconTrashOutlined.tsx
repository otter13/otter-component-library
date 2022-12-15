import React from 'react';
import withIcon from './withIcon';

const IconTrashOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 4h-6.73l-.6-2.3v-.11A2.48 2.48 0 0013.34 0h-2.61A2.48 2.48 0 008.4 1.59L7.76 4H1v2h2v15.5A2.5 2.5 0 005.5 24h13a2.5 2.5 0 002.5-2.5V6h2V4zM10.24 2.28a.5.5 0 01.45-.28h2.61a.5.5 0 01.45.28L14.2 4H9.79l.45-1.72zM18.5 22a.5.5 0 00.5-.5V6H5v15.5a.5.5 0 00.5.5h13zM8 9h2v10H8V9zm8 0h-2v10h2V9z"
    />
  </svg>
);

export default withIcon(IconTrashOutlined);
