import React from 'react';
import withIcon from './withIcon';

const IconBackLinkFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.72368 2.56326L0.560024 10.6536C-0.186676 11.3993 -0.186676 12.6047 0.560024 13.3504L8.72368 21.4408C9.47839 22.1864 10.6975 22.1864 11.4522 21.4408C12.2009 20.6951 12.2009 19.4816 11.4522 18.734L6.67976 13.9921L21.9981 13.9921C23.1052 13.9921 24 13.0965 24 11.993C24 10.8875 23.1052 9.99391 21.9981 9.99391L6.64773 9.99391L11.4522 5.24805C12.2009 4.50239 12.2009 3.30093 11.4522 2.55527C10.6975 1.8096 9.47839 1.8176 8.72368 2.56326Z"
    />
  </svg>
);

export default withIcon(IconBackLinkFilled);
