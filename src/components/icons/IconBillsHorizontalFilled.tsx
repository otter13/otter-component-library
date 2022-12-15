import React from 'react';
import withIcon from './withIcon';

const IconBillsHorizontalFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 23V1h19.424L24 5.576V23H0zM16.127 9h1.516v1.794c.893.166 1.639.592 2.146 1.249l.067.087-1.154.72-.056-.068c-.326-.405-.787-.673-1.33-.782h-1.11c-.36.08-.721.273-.721.729 0 .539.586.687 1.542.884 1.494.295 2.917.7 2.917 2.199 0 1.17-.901 2.008-2.301 2.227v1.96h-1.516v-1.978c-1.104-.17-2-.687-2.497-1.511l-.053-.09 1.225-.667.05.078c.438.669 1.192 1.038 2.124 1.038.898 0 1.457-.353 1.457-.921 0-.613-.626-.76-1.73-.964-1.446-.277-2.728-.72-2.728-2.151 0-1.113.826-1.884 2.152-2.073V9zM4 8h11V6H4v2zm7 4H4v-2h7v2zm-7 4h5v-2H4v2zM18 2v5h5l-5-5z"
    />
  </svg>
);

export default withIcon(IconBillsHorizontalFilled);
