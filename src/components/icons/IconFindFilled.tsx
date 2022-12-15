import React from 'react';
import withIcon from './withIcon';

const IconFindFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 17c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM2 17c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm19.972-9.244c-.494-2.049-1.454-3.028-2.45-3.461l-.092-.482A1 1 0 0018.448 3H17a1 1 0 00-1 1v.547a3.985 3.985 0 00-1.777 2.184A3.838 3.838 0 0012 6c-.822 0-1.586.279-2.223.731A3.985 3.985 0 008 4.547V4a1 1 0 00-1-1H5.552a1 1 0 00-.982.813l-.094.495c-1.253.546-2.151 1.775-2.452 3.465l-1.607 7.24A4.954 4.954 0 000 17c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1 .897-2 2-2s2 1 2 2c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.707-.151-1.377-.417-1.987l-1.611-7.257z"
    />
  </svg>
);

export default withIcon(IconFindFilled);
