import React from 'react';
import withIcon from './withIcon';

const IconStreetAddressFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.422 15.47l-1.453 1.452-1.451-1.452-1.048 1.048 1.452 1.451-1.452 1.453 1.048 1.048 1.451-1.453 1.453 1.453 1.048-1.048-1.453-1.453 1.453-1.451-1.048-1.048z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 5.822c0 .396-.045.789-.113 1.178H24v17H10.723L6 21.166 0 24V7.434l6-3.6 5.094 3.056A6.937 6.937 0 0111 5.822C11 2.612 13.691 0 17 0s6 2.612 6 5.822zM7 19.434L10 21V8.566l-3-1.8v12.668zm-2 0L2 21V8.566l3-1.8v12.668zm7-9.818V22h10V9.611c-1.221 2.437-3.256 4.457-4.335 5.421l-.665.595-.667-.595c-1.078-.962-3.112-2.979-4.333-5.416zM17 4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
    />
  </svg>
);

export default withIcon(IconStreetAddressFilled);
