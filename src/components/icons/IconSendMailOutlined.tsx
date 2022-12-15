import React from 'react';
import withIcon from './withIcon';

const IconSendMailOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.707 10.414L8.293 9l2.298-2.298H4v-2h6.581L8.293 2.414 9.707 1l4 4a.999.999 0 010 1.414l-4 4zM16 4.702v2h6v14H2v-16H0v18h24v-18h-8zm0 8h4v-4h-4v4zm-4 3H4v-2h8v2zm-8 3h6v-2H4v2z"
    />
  </svg>
);

export default withIcon(IconSendMailOutlined);
