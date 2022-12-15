import React from 'react';
import withIcon from './withIcon';

const IconHappyOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm0 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm-4.144-8.517C8.807 15.059 10.356 16 12 16c1.644 0 3.193-.941 4.144-2.517l1.712 1.034C16.541 16.698 14.352 18 12 18s-4.541-1.302-5.856-3.483l1.712-1.034zM8 11a2 2 0 10-.001-4.001A2 2 0 008 11zm6-2a2 2 0 114.001.001A2 2 0 0114 9z"
    />
  </svg>
);

export default withIcon(IconHappyOutlined);
