import React from 'react';
import withIcon from './withIcon';

const IconSadOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-5.856-5.517C7.459 14.302 9.648 13 12 13s4.541 1.302 5.856 3.483l-1.712 1.034C15.193 15.941 13.644 15 12 15c-1.644 0-3.193.941-4.144 2.517l-1.712-1.034zM8 11a2 2 0 10-.001-4.001A2 2 0 008 11zm6-2a2 2 0 114.001.001A2 2 0 0114 9z"
    />
  </svg>
);

export default withIcon(IconSadOutlined);
