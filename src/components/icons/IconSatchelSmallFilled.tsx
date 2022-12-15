import React from 'react';
import withIcon from './withIcon';

const IconSatchelSmallFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 21h20V3H2v18zm11.339-7.307c0-.65-.676-.766-1.508-.928-1.414-.278-2.61-.776-2.61-2.4C9.221 8.893 10.302 8 11.904 8c1.102 0 2.236.418 2.933 1.565l-1.238.858c-.416-.649-1.071-.928-1.727-.928-.582 0-.998.232-.998.731 0 .568.666.684 1.415.835 1.456.29 2.683.777 2.683 2.376 0 1.461-1.05 2.563-2.912 2.563-1.508 0-2.663-.719-3.214-1.936l1.3-.766c.458.87 1.207 1.195 1.987 1.195.728 0 1.206-.302 1.206-.8z"
    />
  </svg>
);

export default withIcon(IconSatchelSmallFilled);
