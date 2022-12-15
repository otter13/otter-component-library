import React from 'react';
import withIcon from './withIcon';

const IconArrowUpFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.56326 8.72417L10.6536 0.560512C11.3993 -0.186188 12.6047 -0.186188 13.3504 0.560512L21.4408 8.72417C22.1864 9.47887 22.1864 10.698 21.4408 11.4527C20.6951 12.2014 19.4816 12.2014 18.734 11.4527L13.9921 6.68025L13.9921 21.9986C13.9921 23.1056 13.0965 24.0005 11.993 24.0005C10.8875 24.0005 9.99391 23.1056 9.99391 21.9986L9.99391 6.64822L5.24805 11.4527C4.50239 12.2014 3.30093 12.2014 2.55527 11.4527C1.8096 10.698 1.8176 9.47887 2.56326 8.72417Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default withIcon(IconArrowUpFilled);
