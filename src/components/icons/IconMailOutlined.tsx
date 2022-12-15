import React from 'react';
import withIcon from './withIcon';

const IconMailOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 3v18H0V3h24zm-4 8h-4V7h4v4zm-8 1H4v2h8v-2zm-8 3h6v2H4v-2zM2 5h20v14H2V5z"
    />
  </svg>
);

export default withIcon(IconMailOutlined);
