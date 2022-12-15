import React from 'react';
import withIcon from './withIcon';

const IconSendFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.004 9.714c-.037.414.176.803.555 1.028l8.243 4.447 4.437 8.241c.207.371.621.603 1.033.566.292-.04.5-.133.674-.307a.888.888 0 00.156-.212 2.96 2.96 0 00.06-.122l8.762-21.881a1.07 1.07 0 00-.233-1.15 1.107 1.107 0 00-1.169-.252L.682 8.806c-.38.15-.641.499-.678.908zm10.92 4.871l-1.519-1.52 4.652-4.657a1.075 1.075 0 011.519 1.52l-4.652 4.657z"
    />
  </svg>
);

export default withIcon(IconSendFilled);
