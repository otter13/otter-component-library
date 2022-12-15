import React from 'react';
import withIcon from './withIcon';

const IconYoutubeOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 8.25L16 12l-6 3.75v-7.5zm11.3 10.36a.495.495 0 01-.492.39H3.191a.492.492 0 01-.489-.385A31.562 31.562 0 012.701 5.39.495.495 0 013.192 5H20.81c.24 0 .44.158.49.385A31.562 31.562 0 0121.3 18.61zm1.953-13.646A2.509 2.509 0 0020.81 3H3.192C2.002 3 .996 3.81.746 4.969a33.535 33.535 0 00.001 14.067A2.509 2.509 0 003.191 21h17.617c1.191 0 2.196-.81 2.446-1.969a33.535 33.535 0 000-14.067z"
    />
  </svg>
);

export default withIcon(IconYoutubeOutlined);
