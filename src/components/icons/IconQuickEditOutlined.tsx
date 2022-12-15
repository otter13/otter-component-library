import React from 'react';
import withIcon from './withIcon';

const IconQuickEditOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.676 3.151l-2.092-1.688a2.068 2.068 0 00-2.959.364L.666 16.292 0 22.94l6.094-2.275L17.05 6.2a2.193 2.193 0 00.426-1.601 2.187 2.187 0 00-.8-1.449zM4.688 18.69l-.61.228-1.283-1.034.067-.664 7.607-10.042 1.826 1.471-7.607 10.04zM11.89 5.31l1.826 1.47 1.452-1.915-1.826-1.47L11.89 5.31zm7.486 10.65h-5.785l-2.233 2.491h8.018v-2.49zm4.582-1.835h-9.8l2.229-2.491h7.57v2.49z"
    />
  </svg>
);

export default withIcon(IconQuickEditOutlined);
