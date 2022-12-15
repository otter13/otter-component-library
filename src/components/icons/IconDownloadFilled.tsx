import React from 'react';
import withIcon from './withIcon';

const IconDownloadFilled = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.084 9.296C5.498 5.754 8.442 3 12 3c3.557 0 6.501 2.754 6.915 6.296C21.788 9.731 24 12.28 24 15.346c0 3.372-2.673 6.116-5.959 6.116H5.958C2.672 21.462 0 18.718 0 15.346c0-3.067 2.212-5.615 5.084-6.05zm7.839-.758v6.08l2.116-2.117 1.306 1.305-3.693 3.693a.92.92 0 01-1.305 0l-3.692-3.693 1.305-1.305 2.117 2.117v-6.08h1.846z"
    />
  </svg>
);

export default withIcon(IconDownloadFilled);
