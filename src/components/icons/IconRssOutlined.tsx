import React from 'react';
import withIcon from './withIcon';

const IconRssOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 20c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2zm2 0c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4 4 1.794 4 4zm-4-9v2c3.859 0 7 3.141 7 7h2c0-4.963-4.037-9-9-9zm0-5v2c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14zm19 14h-2c0-9.374-7.626-17-17-17V1c10.477 0 19 8.523 19 19z"
    />
  </svg>
);

export default withIcon(IconRssOutlined);
