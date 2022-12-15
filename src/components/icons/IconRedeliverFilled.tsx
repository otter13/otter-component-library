import React from 'react';
import withIcon from './withIcon';

const IconRedeliverFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.867 19.2h9.139a5.627 5.627 0 001.764 1.92H0V0h22.404v13.853a6.412 6.412 0 00-1.867-2.15V1.92h-5.6v4.8H7.467v-4.8H1.867V19.2zm9.335-4.8H3.734v-1.92h7.468v1.92zm-7.468 2.88h5.601v-1.92H3.734v1.92zM21.47 20.71l1.205-1.248L24 20.816l-2.8 2.9a.989.989 0 01-.663.284.924.924 0 01-.66-.281l-2.8-2.88 1.32-1.358 1.206 1.242v-3.09c0-1.836-1.063-3.233-2.834-3.233-1.31 0-2.686 1.012-2.686 2.374 0 .984.853 1.785 1.786 1.785v1.92c-1.867 0-3.653-1.662-3.653-3.705 0-2.42 2.247-4.294 4.587-4.294 2.8 0 4.667 2.259 4.667 5.152v3.08z"
    />
  </svg>
);

export default withIcon(IconRedeliverFilled);
