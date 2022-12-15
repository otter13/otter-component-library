import React from 'react';
import withIcon from './withIcon';

const IconBoatFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 13v-1h-6.456l-4.01-6H11V2H5v4H4v6H1v8.887C.717 20.957.396 21 0 21v2c1.804 0 2.776-.647 3.557-1.168.697-.465 1.249-.832 2.446-.832 1.198 0 1.75.367 2.447.832.782.521 1.753 1.168 3.557 1.168 1.803 0 2.774-.647 3.555-1.168.697-.465 1.248-.832 2.444-.832 1.195 0 1.745.367 2.442.832.78.521 1.75 1.168 3.552 1.168v-2c-1.195 0-1.745-.367-2.442-.832l-.216-.143C23.077 18.25 24 15.368 24 13zM6 8h6.466l2.673 4H6V8zm0 8.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3.5 1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
    />
  </svg>
);

export default withIcon(IconBoatFilled);
