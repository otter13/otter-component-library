import React from 'react';
import withIcon from './withIcon';

const IconDownloadDeviceOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 22h4v-2h-4v2zm10-.5c0 1.379-1.122 2.5-2.5 2.5h-11A2.503 2.503 0 014 21.5v-17C4 3.121 5.122 2 6.5 2H9v2H6.5a.5.5 0 00-.5.5V18h12V4.5a.5.5 0 00-.5-.5H15V2h2.5C18.878 2 20 3.121 20 4.5v17zM8.707 6.293L11 8.586V0h2v8.586l2.293-2.293 1.414 1.414-4 4a.997.997 0 01-1.414 0l-4-4 1.414-1.414z"
    />
  </svg>
);

export default withIcon(IconDownloadDeviceOutlined);
