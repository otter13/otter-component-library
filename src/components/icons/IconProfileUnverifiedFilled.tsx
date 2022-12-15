import React from 'react';
import withIcon from './withIcon';

const IconProfileUnverifiedFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 5.077c0 2.527 1.391 5.077 4.5 5.077 2.24 0 4.5-1.57 4.5-5.077C14 2.55 12.608 0 9.5 0 7.26 0 5 1.57 5 5.077zM0 20.246h8.905C8.88 20.246 7.913 18.06 8 16c.093-2.2 1.125-4.32 1.24-4.555l.01-.022c-1.77 0-5.016.262-6.886 2.019C.839 14.874 0 16.937 0 19.253v.993z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 17a7 7 0 11-14 0 7 7 0 0114 0zm-4.161 2.352a.265.265 0 000-.375L17.86 17l1.978-1.977a.265.265 0 000-.375l-.487-.487a.265.265 0 00-.375 0L17 16.139l-1.978-1.978a.265.265 0 00-.375 0l-.486.487a.265.265 0 000 .375L16.138 17l-1.977 1.977a.265.265 0 000 .375l.486.487a.265.265 0 00.375 0L17 17.862l1.977 1.977a.265.265 0 00.375 0l.487-.486z"
    />
  </svg>
);

export default withIcon(IconProfileUnverifiedFilled);
