import React from 'react';
import withIcon from './withIcon';

const IconCalendarDateOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3V1a1 1 0 10-2 0v2H6V1a1 1 0 00-2 0v2H0v18.51A2.49 2.49 0 002.5 24h18a2.49 2.49 0 002.5-2.49V3h-4zm2 18.51a.49.49 0 01-.5.49h-18a.49.49 0 01-.5-.49V8h19v13.51zM10 10H4v6h6v-6z"
    />
  </svg>
);

export default withIcon(IconCalendarDateOutlined);
