import React from 'react';
import withIcon from './withIcon';

const IconRegisterOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 24V0h17.92l-2 2.001H2v20h16v-7.92l2-2V24H0zM21.838 1.535l1.626 1.626c.346.346.536.806.536 1.294 0 .49-.19.95-.537 1.296L12.492 16.723 7 18l1.277-5.491L19.252 1.535a1.833 1.833 0 012.587 0zM19.091 4.49l1.418 1.418 1.453-1.454-1.418-1.416-1.453 1.452zm-7.598 10.433l-.55.128-.995-.996.127-.549 7.618-7.618 1.417 1.418-7.617 7.617zM13 5H4v2h6.953L13 5zm-5.994 6H4V9h5l-1.994 2z"
    />
  </svg>
);

export default withIcon(IconRegisterOutlined);
