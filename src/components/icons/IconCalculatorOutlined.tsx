import React from 'react';
import withIcon from './withIcon';

const IconCalculatorOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 2.5C22 1.122 20.879 0 19.5 0h-14A2.503 2.503 0 003 2.5v19C3 22.878 4.121 24 5.5 24h14c1.379 0 2.5-1.122 2.5-2.5v-19zM19.5 22a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5h-14a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h14zM7 9h11V4H7v5zm11 4h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0H7v-2h3v2zm5 3h3v-2h-3v2zm-1 0h-3v-2h3v2zm-7 0h3v-2H7v2zm11 3h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0H7v-2h3v2z"
    />
  </svg>
);

export default withIcon(IconCalculatorOutlined);
