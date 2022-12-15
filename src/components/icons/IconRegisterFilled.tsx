import React from 'react';
import withIcon from './withIcon';

const IconRegisterFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 24V0h17.92l-2 2.001H2v20h16v-7.92l2-2V24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.464 3.161L21.84 1.535a1.833 1.833 0 00-2.588 0L8.277 12.509 7 18l5.492-1.277L23.463 5.75A1.82 1.82 0 0024 4.455c0-.488-.19-.948-.536-1.294zM11.493 14.924l-.55.128-.995-.996.127-.549 7.618-7.618 1.417 1.418-7.617 7.617z"
    />
    <path d="M13 5H4v2h6.953L13 5zM7.006 11H4V9h5l-1.994 2z" />
  </svg>
);

export default withIcon(IconRegisterFilled);
