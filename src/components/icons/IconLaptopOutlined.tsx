import React from 'react';
import withIcon from './withIcon';

const IconLaptopOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 16H4V5.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5V16zm-10 4h4v-2h-4v2zm12-2V5.5C22 4.121 20.878 3 19.5 3h-15A2.503 2.503 0 002 5.5V18H0v2a2 2 0 002 2h20a2 2 0 002-2v-2h-2z"
    />
  </svg>
);

export default withIcon(IconLaptopOutlined);
