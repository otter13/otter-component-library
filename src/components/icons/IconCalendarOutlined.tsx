import React from 'react';
import withIcon from './withIcon';

const IconCalendarOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 7.993H2V21.51c0 .276.224.49.5.49h18c.276 0 .5-.214.5-.49V7.993zm2-5.002V21.51A2.492 2.492 0 0120.5 24h-18C1.119 24 0 22.89 0 21.509V2.991h4v-1.99a1 1 0 012 0v1.99h11v-1.99a1 1 0 012 0v1.99h4zm-8 16.007h3v-3.001h-3v3zm-5 0h3v-3.001h-3v3zm-5 0h3v-3.001H5v3zm10-5.002h3v-3.001h-3v3zm-5 0h3v-3.001h-3v3zm-5 0h3v-3.001H5v3z"
    />
  </svg>
);

export default withIcon(IconCalendarOutlined);
