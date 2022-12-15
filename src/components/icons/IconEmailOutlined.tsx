import React from 'react';
import withIcon from './withIcon';

const IconEmailOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5 19h-19a.501.501 0 01-.5-.5V7.11l9.367 7.664a.994.994 0 001.266 0L22 7.11V18.5c0 .275-.225.5-.5.5zm-.079-14L12 12.708 2.579 5h18.842zm.079-2h-19A2.502 2.502 0 000 5.5v13C0 19.879 1.121 21 2.5 21h19c1.379 0 2.5-1.121 2.5-2.5v-13C24 4.121 22.879 3 21.5 3z"
    />
  </svg>
);

export default withIcon(IconEmailOutlined);
