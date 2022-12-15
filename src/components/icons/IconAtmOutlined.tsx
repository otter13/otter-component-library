import React from 'react';
import withIcon from './withIcon';

const IconAtmOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 2.5C24 1.122 22.878 0 21.5 0h-19A2.503 2.503 0 000 2.5V23h4v-2H2V2.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5V21h-2v2h4V2.5zM16 13H4V4h12v9zM6 11h8V6H6v5zm14-5h-2V4h2v2zm-2 3h2V7h-2v2zm2 3h-2v-2h2v2zm0 3H4v2h2v7h12v-7h2v-2zm-6 7a2 2 0 012-2v-3h-2a2 2 0 11-4 0H8v3a2 2 0 012 2h4z"
    />
  </svg>
);

export default withIcon(IconAtmOutlined);
