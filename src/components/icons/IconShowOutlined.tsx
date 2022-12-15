import React from 'react';
import withIcon from './withIcon';

const IconShowOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5C6.02 5 1.423 11.105 1.225 11.406c-.3.399-.3.79 0 1.188C1.423 12.894 6.02 19 12 19c5.98 0 10.577-6.105 10.775-6.406.3-.399.3-.79 0-1.188C22.577 11.106 17.98 5 12 5zm0 2c2.791 0 4.983 2.2 4.983 5S14.79 17 12 17c-2.791 0-4.983-2.2-4.983-5S9.21 7 12 7zm-2.491 5c0-1.379 1.117-2.5 2.491-2.5a2.498 2.498 0 012.491 2.5c0 1.379-1.117 2.5-2.491 2.5A2.498 2.498 0 019.509 12z"
    />
  </svg>
);

export default withIcon(IconShowOutlined);
