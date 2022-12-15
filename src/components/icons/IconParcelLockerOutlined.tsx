import React from 'react';
import withIcon from './withIcon';

const IconParcelLockerOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5 0C21.879 0 23 1.122 23 2.5V23H1V2.5C1 1.122 2.121 0 3.5 0h17zm.5 7H3V2.5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5V7zM3 9v5h18V9H3zm0 12v-5h18v5H3zM19 6h-2V3h2v3zm-2 7h2v-3h-2v3zm2 7h-2v-3h2v3z"
    />
  </svg>
);

export default withIcon(IconParcelLockerOutlined);
