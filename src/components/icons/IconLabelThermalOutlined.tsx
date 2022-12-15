import React from 'react';
import withIcon from './withIcon';

const IconLabelThermalOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 24V0h9.792l3.065 3.065V24H6zm8.571-22.286H7.714v6.857H9.43v1.715H7.714v5.143H9.43v1.714H7.714v5.143h9.429v-5.143h-1.714v-1.714h1.714v-5.143h-1.714V8.57h1.714V4.285H14.57v-2.57zm-4.285 8.572H12V8.57h-1.714v1.715zm4.285 0h-1.714V8.57h1.714v1.715zm-4.285 6.857H12v-1.715h-1.714v1.715zm4.285 0h-1.714v-1.715h1.714v1.715z"
    />
  </svg>
);

export default withIcon(IconLabelThermalOutlined);
