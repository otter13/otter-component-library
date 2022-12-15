import React from 'react';
import withIcon from './withIcon';

const IconParcelOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.996 19H9.99v-2H3.996v2zM11.988 16H3.996v-2h7.992v2z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.996 1H0v22h23.996V1zM8 7.875v-4.95H1.866v18.15H22.13V2.925h-6.132v4.95h-8zM14.13 5.95H9.865V2.925h4.266V5.95z"
    />
  </svg>
);

export default withIcon(IconParcelOutlined);
