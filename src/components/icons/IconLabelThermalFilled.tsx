import React from 'react';
import withIcon from './withIcon';

const IconLabelThermalFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10.286 10.286H12V8.57h-1.714v1.715zM14.571 10.286h-1.714V8.57h1.714v1.715zM10.286 17.143H12v-1.715h-1.714v1.715zM14.571 17.143h-1.714v-1.715h1.714v1.715z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 24V0h9.792l3.065 3.065V24H6zm8.571-22.286H7.714v6.857H9.43v1.715H7.714v5.143H9.43v1.714H7.714v5.143h9.429v-5.143h-1.714v-1.714h1.714v-5.143h-1.714V8.57h1.714V4.285H14.57v-2.57z"
    />
  </svg>
);

export default withIcon(IconLabelThermalFilled);
