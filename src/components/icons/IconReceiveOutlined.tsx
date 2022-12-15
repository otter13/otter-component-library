import React from 'react';
import withIcon from './withIcon';

const IconReceiveOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.965 16.699V2.962h17.681v6.103a8.528 8.528 0 011.965.707V1H0v17.661h8.84a8.26 8.26 0 010-1.962H1.966zm15.255-7.85h.462V4.925h-3.93v3.924h3.468zM3.93 10.812h6.876V8.849H3.929v1.963zm4.91 2.943H3.93v-1.962h4.91v1.962zm1.966 3.66c0-3.636 2.953-6.603 6.592-6.603 3.64 0 6.602 2.959 6.602 6.594C24 21.04 21.038 24 17.398 24a6.59 6.59 0 01-6.592-6.585zm6.592 4.701a4.718 4.718 0 01-4.716-4.71 4.718 4.718 0 014.716-4.71c2.6 0 4.716 2.113 4.716 4.71a4.718 4.718 0 01-4.716 4.71zm-1.702-5.7l1.156 1.167 2.23-2.25 1.375 1.388-2.917 2.943a.965.965 0 01-1.375 0l-1.845-1.86 1.376-1.387z"
    />
  </svg>
);

export default withIcon(IconReceiveOutlined);
