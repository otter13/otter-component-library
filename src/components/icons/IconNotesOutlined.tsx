import React from 'react';
import withIcon from './withIcon';

const IconNotesOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 1v2H7V1H5v2H0v20h19.424L24 18.423V3h-5V1h-2zm2 5.999V5h2.999v11.999H18V21H2V5h3v1.999h2V5h10v1.999h2zm0 4H5V9h14v2zM5 15h8v-2H5v2zm5 4H5v-2h5v2z"
    />
  </svg>
);

export default withIcon(IconNotesOutlined);
