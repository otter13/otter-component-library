import React from 'react';
import withIcon from './withIcon';

const IconLinkedinOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 7a1 1 0 11-2 0 1 1 0 012 0zm8 5.196c0-1.867-.302-3.31-2.483-3.31-1.048 0-1.651.114-1.939 1.114H12V9h-2v7h2v-3.431c0-.904.465-1.781 1.586-1.781 1.104 0 1.414 1.035 1.414 1.839V16h2v-3.804zM7 16h2V9H7v7zm5-14C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 22C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12z"
    />
  </svg>
);

export default withIcon(IconLinkedinOutlined);
