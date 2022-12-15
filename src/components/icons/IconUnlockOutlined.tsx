import React from 'react';
import withIcon from './withIcon';

const IconUnlockOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 0C15.416 0 13 2.675 13 6.091V10H2.5A2.503 2.503 0 000 12.5V24h18V12.5c0-1.378-1.122-2.5-2.5-2.5H15V6.091C15 3.797 16.538 2 18.5 2S22 3.797 22 6.091V8h2V6.091C24 2.675 21.584 0 18.5 0zm-3 12a.5.5 0 01.5.5V22H2v-9.5a.5.5 0 01.5-.5h13zM8 20v-2.277c-.595-.347-1-.984-1-1.723a2 2 0 014 0c0 .739-.405 1.376-1 1.723V20H8z"
    />
  </svg>
);

export default withIcon(IconUnlockOutlined);
