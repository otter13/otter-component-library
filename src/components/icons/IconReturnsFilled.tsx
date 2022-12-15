import React from 'react';
import withIcon from './withIcon';

const IconReturnsFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.238 4.778l.894 2.889 2.711 9.973c.217.798 1.02 1.36 1.944 1.36h10.151c.918 0 1.718-.555 1.94-1.347L24 6.556h-7.5V11.5h-5V6.556H5.862l-.696-2.25C4.928 3.535 4.138 3 3.238 3H0v1.778h3.238zM12 22a2 2 0 11-4 0 2 2 0 014 0zM18 24a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 4h1.5a.5.5 0 01.5.5V10h2V4.5C15 3.122 13.879 2 12.5 2H11V0L7 3l4 3V4z"
    />
  </svg>
);

export default withIcon(IconReturnsFilled);
