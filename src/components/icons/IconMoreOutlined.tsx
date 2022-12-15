import React from 'react';
import withIcon from './withIcon';

const IconMoreOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.48 14.96a2.48 2.48 0 11.001-4.961 2.48 2.48 0 01-.001 4.961zm19.043 0a2.48 2.48 0 110-4.961 2.48 2.48 0 010 4.961zM9.52 12.48a2.48 2.48 0 104.961-.001 2.48 2.48 0 00-4.96.001z"
    />
  </svg>
);

export default withIcon(IconMoreOutlined);
