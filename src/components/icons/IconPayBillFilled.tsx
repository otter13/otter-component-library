import React from 'react';
import withIcon from './withIcon';

const IconPayBillFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 18h-1.729c-.149 0-.271-.151-.271-.3v-1.4c0-.15.122-.3.271-.3H21v2zM8.254 7l-2.7 3H4.502c-.827 0-1.5-.342-1.5-1.169S3.675 7 4.502 7h3.752zm4.586 3c-.011-.065-.029-.083-.029-.15 0-.66.536-.91 1.195-.91.66 0 1.196.25 1.196.91 0 .067-.017.085-.028.15H12.84zm2.307-7.338l6.007 4.272L18.209 10h-1.021c.004-.065.014-.085.014-.15 0-1.762-1.434-2.91-3.196-2.91-1.761 0-3.195 1.148-3.195 2.91 0 .066.011.085.015.15H8.245l6.902-7.338zM20.857 10L24 6.58 14.852 0l-4.798 5H4.502c-1.759 0-3.22 1.637-3.464 3.331L1 20c0 2.206 1.793 4 4 4h17a1 1 0 001-1V11.33c0-.553-.448-1.331-1-1.331h-1.143z"
    />
  </svg>
);

export default withIcon(IconPayBillFilled);
