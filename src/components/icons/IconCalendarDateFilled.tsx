import React from 'react';
import withIcon from './withIcon';

const IconCalendarDateFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.174 2.991v-1.99c0-.553-.429-1.001-.957-1.001s-.956.448-.956 1v1.991H6.739v-1.99C6.74.447 6.311 0 5.783 0s-.957.448-.957 1v1.991H1V21.51C1 22.89 2.07 24 3.391 24H20.61C21.929 24 23 22.89 23 21.509V2.991h-3.826zM4 18.002h5.74V12H4v6.003zM22 5H3v4h19V5z"
    />
  </svg>
);

export default withIcon(IconCalendarDateFilled);
