import React from 'react';
import withIcon from './withIcon';

const IconSecureFilesOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.535 3l-2-3H0v20a3 3 0 003 3h9v-2H3a1 1 0 01-1-1V5h19a1 1 0 011 1v4.201c1.02.423 1.81 1.475 1.97 2.799H24V6a3 3 0 00-3-3H8.535zM20 15v2h-2v-2c0-.565.466-1 1-1s1 .435 1 1zm2 0v2h.5a1.5 1.5 0 011.5 1.5V24H14v-5.5a1.5 1.5 0 011.5-1.5h.5v-2c0-1.702 1.391-3 3-3s3 1.298 3 3zm-3.7 4a.3.3 0 00-.3.3v2.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-2.4a.3.3 0 00-.3-.3h-1.4z"
    />
  </svg>
);

export default withIcon(IconSecureFilesOutlined);
