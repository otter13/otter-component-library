import React from 'react';
import withIcon from './withIcon';

const IconQuickEditFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.584 1.463l2.092 1.688c.447.359.73.874.801 1.449.071.576-.08 1.145-.426 1.6L6.094 20.665 0 22.939l.666-6.647 10.96-14.465a2.068 2.068 0 012.958-.364zM4.078 18.918l.61-.228 7.607-10.041-1.826-1.47L2.862 17.22l-.067.664 1.283 1.034z"
    />
    <path d="M19.377 15.96h-5.785l-2.233 2.491h8.018v-2.49zM23.959 14.125h-9.8l2.229-2.491h7.57v2.49z" />
  </svg>
);

export default withIcon(IconQuickEditFilled);
