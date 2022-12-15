import React from 'react';
import withIcon from './withIcon';

const IconMobileOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 18H6V2.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5V18zm-8 4h4v-2h-4v2zm7.5-22h-11A2.5 2.5 0 004 2.5v19A2.5 2.5 0 006.5 24h12a1.5 1.5 0 001.5-1.5v-20A2.5 2.5 0 0017.5 0z"
    />
  </svg>
);

export default withIcon(IconMobileOutlined);
