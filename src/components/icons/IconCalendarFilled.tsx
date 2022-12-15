import React from 'react';
import withIcon from './withIcon';

const IconCalendarFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.174 1.917v1.825H23v16.974C23 21.983 21.93 23 20.609 23H3.39C2.071 23 1 21.983 1 20.716V3.742h3.826V1.917c0-.506.428-.917.957-.917.529 0 .956.41.956.917v1.825h10.522V1.917c0-.506.427-.917.956-.917.53 0 .957.41.957.917zm-5.74 12.913h-2.869v-2.751h2.87v2.75zm1.914 0h2.87v-2.751h-2.87v2.75zm-6.696 4.585h-2.87v-2.751h2.87v2.751zm1.913 0h2.87v-2.751h-2.87v2.751zm7.652 0h-2.87v-2.751h2.87v2.751zM5.783 14.83h2.87v-2.751h-2.87v2.75zM21 5.5H3v4h18v-4z"
      fill="currentColor"
    />
  </svg>
);

export default withIcon(IconCalendarFilled);
