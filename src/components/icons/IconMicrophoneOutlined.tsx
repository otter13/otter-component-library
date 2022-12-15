import React from 'react';
import withIcon from './withIcon';

const IconMicrophoneOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.23 5.538C9.23 3.97 10.433 2.77 12 2.77c1.569 0 2.77 1.2 2.77 2.77V12c0 1.569-1.201 2.77-2.77 2.77-1.568 0-2.77-1.201-2.77-2.77V5.538zm1.847 12.837c-3.119-.45-5.538-3.137-5.538-6.375h1.846A4.624 4.624 0 0012 16.615 4.624 4.624 0 0016.616 12h1.846c0 3.238-2.42 5.924-5.539 6.375v2.856h-1.846v-2.856z"
    />
  </svg>
);

export default withIcon(IconMicrophoneOutlined);
