import React from 'react';
import withIcon from './withIcon';

const IconForeignCurrencyOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.412 8.33L9.25 4h2.581l-4.42 6.25V11h3v2h-3v1h3v2h-3v4h-2v-4h-3v-2h3v-1h-3v-2h3v-.751L1 3.999h2.588l2.824 4.33zM18.41 12v3.167c0 1.164-.42 2.105-.957 2.833h4.957v2h-7.64l-.36-2c.017-.008 2-.951 2-2.833V12h-2v-2h2V8.058c0-1.433.665-2.671 1.824-3.398 1.365-.855 3.193-.876 4.889-.055l-.871 1.799c-1.072-.519-2.177-.538-2.955-.05-.58.363-.887.952-.887 1.704V10h3v2h-3z"
    />
  </svg>
);

export default withIcon(IconForeignCurrencyOutlined);
