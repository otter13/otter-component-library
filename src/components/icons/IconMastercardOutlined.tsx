import React from 'react';
import withIcon from './withIcon';

const IconMastercardOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 3h19C22.879 3 24 4.121 24 5.5v13c0 1.379-1.121 2.5-2.5 2.5h-19A2.502 2.502 0 010 18.5v-13C0 4.121 1.121 3 2.5 3zm0 2a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-19zm6.239 2A4.738 4.738 0 004 11.739a4.738 4.738 0 008 3.44 4.738 4.738 0 008-3.44 4.738 4.738 0 00-8-3.44A4.723 4.723 0 008.739 7zm6.522 1.427a3.32 3.32 0 013.312 3.312 3.318 3.318 0 01-3.312 3.312 3.312 3.312 0 01-2.37-.994c.383-.681.587-1.48.587-2.318 0-.838-.204-1.637-.586-2.319a3.312 3.312 0 012.37-.993z"
    />
  </svg>
);

export default withIcon(IconMastercardOutlined);
