import React from 'react';
import withIcon from './withIcon';

const IconEditOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.954 6.046l-2-2 2.03-2.033 2.002 2.001-2.032 2.032zM5.294 20.705l-.808.188-1.379-1.38.188-.808L16.533 5.466l2 2.001L5.295 20.705zM23.408 2.568L21.43.593a2.028 2.028 0 00-2.867 0L1.468 17.691 0 24l6.31-1.468L23.407 5.435c.79-.79.79-2.076 0-2.867z"
    />
  </svg>
);

export default withIcon(IconEditOutlined);
