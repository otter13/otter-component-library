import React from 'react';
import withIcon from './withIcon';

const IconChevronRightFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4401 10.566L17.7613 9.85157C17.7498 9.83947 17.7326 9.83543 17.7172 9.8213L8.95083 0.591851C8.20112 -0.197284 6.9874 -0.197284 6.23961 0.591851L5.56084 1.30429C4.81305 2.09343 4.81305 3.37098 5.56084 4.1581L13.01 12.001L5.56084 19.8419C4.81305 20.629 4.81305 21.9086 5.56084 22.6977L6.23961 23.4081C6.9874 24.1973 8.20112 24.1973 8.95083 23.4081L17.7172 14.1807C17.7307 14.1666 17.7498 14.1626 17.7613 14.1484L18.4401 13.436C18.8159 13.0404 19.0019 12.5197 19 12.001C19.0019 11.4803 18.8159 10.9616 18.4401 10.566Z"
    />
  </svg>
);

export default withIcon(IconChevronRightFilled);
