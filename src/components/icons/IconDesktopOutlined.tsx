import React from 'react';
import withIcon from './withIcon';

const IconDesktopOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 15H2V3.546C2 3.245 2.245 3 2.546 3h18.908c.301 0 .546.245.546.546V15zm-12 4h4v-2h-4v2zM21.454 1H2.546A2.55 2.55 0 000 3.546v13.908a2.54 2.54 0 002.546 2.536h5.477A4.986 4.986 0 007 23h10c0-1.131-.39-2.162-1.023-3h5.477A2.55 2.55 0 0024 17.454V3.546A2.55 2.55 0 0021.454 1z"
    />
  </svg>
);

export default withIcon(IconDesktopOutlined);
