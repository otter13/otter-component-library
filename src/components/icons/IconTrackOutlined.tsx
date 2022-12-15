import React from 'react';
import withIcon from './withIcon';

const IconTrackOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 12c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.941 11A9.012 9.012 0 0013 3.059V0h-2v3.059A9.012 9.012 0 003.059 11H0v2h3.059A9.012 9.012 0 0011 20.941V24h2v-3.059A9.012 9.012 0 0020.941 13H24v-2h-3.059zM12 19c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 3.141 7 7-3.14 7-7 7z"
    />
  </svg>
);

export default withIcon(IconTrackOutlined);
