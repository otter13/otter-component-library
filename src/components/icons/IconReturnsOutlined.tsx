import React from 'react';
import withIcon from './withIcon';

const IconReturnsOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 4H11v2L7 3l4-3v2h1.5C13.879 2 15 3.122 15 4.5V10h-2V4.5a.5.5 0 00-.5-.5zm8.56 13.2L24 7h-7v2h4.332l-2.226 7.641a.495.495 0 01-.475.359H9.046a.495.495 0 01-.475-.361L6.382 9H11V7H5.888l-.643-2.207A2.475 2.475 0 002.876 3H0v2h2.809c.22 0 .414.148.475.363l3.337 11.824A2.474 2.474 0 008.996 19h9.694a2.474 2.474 0 002.37-1.8zM11 22a2 2 0 11-3.999.001A2 2 0 0111 22zm7 2a2 2 0 10.001-3.999A2 2 0 0018 24z"
    />
  </svg>
);

export default withIcon(IconReturnsOutlined);
