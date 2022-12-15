import React from 'react';
import withIcon from './withIcon';

const IconFlagOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 1C0 0.447715 0.447715 0 1 0H23C23.388 0 23.741 0.22446 23.9056 0.575845C24.0702 0.927229 24.0166 1.3421 23.7682 1.64018L19.2625 7.04704L23.8137 13.4188C24.0315 13.7236 24.0606 14.1245 23.8892 14.4576C23.7178 14.7907 23.3746 15 23 15H5V23C5 23.5523 4.55228 24 4 24H1C0.447715 24 0 23.5523 0 23V1ZM3 15H2V22H3V15ZM2 13H21.0568L17.1863 7.58124C16.9219 7.21112 16.9406 6.70923 17.2318 6.35982L20.865 2H2V13Z"
    />
  </svg>
);

export default withIcon(IconFlagOutlined);
