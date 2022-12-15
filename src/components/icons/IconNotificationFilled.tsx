import React from 'react';
import withIcon from './withIcon';

const IconNotificationFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.418 2.215c0 .253.042.496.118.722-3.337.92-5.79 4.018-5.79 7.697v5.317c0 .979-.782 1.772-1.746 1.772v1.772h19.2v-1.772c-.964 0-1.746-.793-1.746-1.772v-5.317c0-3.68-2.454-6.777-5.79-7.697.076-.226.118-.47.118-.722C13.782.992 12.805 0 11.6 0S9.418.992 9.418 2.215zM11.6 24c-1.928 0-3.491-1.587-3.491-3.545h6.982C15.09 22.413 13.528 24 11.6 24z"
    />
  </svg>
);

export default withIcon(IconNotificationFilled);
