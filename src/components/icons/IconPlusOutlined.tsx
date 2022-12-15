import React from 'react';
import withIcon from './withIcon';

const IconPlusOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22c1.11 0 2-1.13 2-2.524V13h6.476C20.869 13 22 12.106 22 11c0-1.11-1.13-2-2.524-2H13V2.524C13 1.131 12.106 0 11 0 9.89 0 9 1.13 9 2.524V9H2.524C1.131 9 0 9.894 0 11c0 1.11 1.13 2 2.524 2H9v6.476C9 20.869 9.894 22 11 22z"
    />
  </svg>
);

export default withIcon(IconPlusOutlined);
