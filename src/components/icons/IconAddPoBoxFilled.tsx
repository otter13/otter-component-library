import React from 'react';
import withIcon from './withIcon';

const IconAddPoBoxFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 0A2.5 2.5 0 000 2.5v18A2.5 2.5 0 002.5 23h7.798a9.036 9.036 0 01-1.36-2H2.5c-.28 0-.5-.22-.5-.5v-18c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v5.555a9.057 9.057 0 012 0V2.5A2.5 2.5 0 0015.5 0h-13zM8 17c0-.338.019-.672.055-1H4v2h4.055A9.056 9.056 0 018 17zm5-13v4.939a9.05 9.05 0 00-2.519 1.862L9.94 9.55C10.57 9.22 11 8.76 11 8c0-1.1-.9-2-2-2s-2 .9-2 2c0 .76.43 1.22 1.06 1.55L7 12h2.52a8.98 8.98 0 00-1.006 2H5V4h8zm4 20c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 3.141 7 7-3.14 7-7 7zm-1-10v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2z"
    />
  </svg>
);

export default withIcon(IconAddPoBoxFilled);
