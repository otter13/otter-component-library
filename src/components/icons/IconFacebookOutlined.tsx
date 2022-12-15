import React from 'react';
import withIcon from './withIcon';

const IconFacebookOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 01-10 10zm3-15.92c-.2-.02-1.12-.08-1.9-.08A2.85 2.85 0 0010 8.82V11H8v2h2v5h2v-5h2.65l.28-2H12V9c0-.59.67-1 1.56-1H15V6.08z"
    />
  </svg>
);

export default withIcon(IconFacebookOutlined);
