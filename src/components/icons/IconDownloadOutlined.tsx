import React from 'react';
import withIcon from './withIcon';

const IconDownloadOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.084 8.296C5.498 4.754 8.442 2 12 2c3.557 0 6.501 2.754 6.915 6.296C21.788 8.731 24 11.28 24 14.346c0 3.372-2.673 6.116-5.959 6.116H5.958C2.672 20.462 0 17.718 0 14.346c0-3.067 2.212-5.615 5.084-6.05zm-3.238 6.165c0 2.354 1.844 4.154 4.112 4.154H18.04c2.268 0 4.113-1.8 4.113-4.153 0-2.354-1.845-4.154-4.113-4.154h-.503V9.154c0-2.926-2.716-5.308-5.538-5.308-2.823 0-5.538 2.382-5.538 5.308v1.154h-.504c-2.268 0-4.112 1.8-4.112 4.153z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.923 13.618v-6.08h-1.846v6.08L8.96 11.5l-1.305 1.305 3.692 3.693a.92.92 0 001.305 0l3.693-3.693-1.306-1.305-2.116 2.117z"
    />
  </svg>
);

export default withIcon(IconDownloadOutlined);
