import React from 'react';
import withIcon from './withIcon';

const IconNotificationOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.38 3.27c2.054.492 3.676 1.638 4.865 3.265C20.339 8.032 21 9.951 21 11v5c0 1.448.552 2 2 2v2h-7a4 4 0 01-8 0H1v-2c1.448 0 2-.552 2-2v-5c0-1.049.661-2.968 1.755-4.465 1.189-1.627 2.811-2.773 4.866-3.266a2.5 2.5 0 114.759 0zM19.385 18c-.254-.56-.386-1.23-.386-2v-5c0-.613-.52-2.122-1.37-3.285C16.378 6.002 14.55 5 12 5S7.622 6.002 6.37 7.715C5.52 8.878 5 10.387 5 11v5c0 .77-.132 1.44-.386 2h14.772zM12 22a2 2 0 01-2-2h4a2 2 0 01-2 2z"
    />
  </svg>
);

export default withIcon(IconNotificationOutlined);
