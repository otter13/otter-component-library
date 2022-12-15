import React from 'react';
import withIcon from './withIcon';

const IconUploadOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2c3.546 0 6.484 2.65 6.939 6.073A6.01 6.01 0 0124 14c0 3.308-2.691 6-6 6h-3v-2h3c2.206 0 4-1.795 4-4 0-2.206-1.794-4-4-4h-1V9c0-2.757-2.243-5-5-5S7 6.243 7 9v1H6c-2.206 0-4 1.794-4 4 0 2.205 1.794 4 4 4h3v2H6c-3.309 0-6-2.692-6-6a6.01 6.01 0 015.061-5.927C5.516 4.65 8.454 2 12 2zm4.707 12.293l-1.414 1.414L13 13.414V23h-2v-9.586l-2.293 2.293-1.414-1.414 4-4a.999.999 0 011.414 0l4 4z"
    />
  </svg>
);

export default withIcon(IconUploadOutlined);
