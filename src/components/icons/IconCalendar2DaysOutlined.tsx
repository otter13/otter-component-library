import React from 'react';
import withIcon from './withIcon';

const IconCalendar2DaysOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 8H3v13.509c0 .276.224.49.5.49h18c.276 0 .5-.214.5-.49V8zm2-5v18.509A2.492 2.492 0 0121.5 24h-18C2.119 24 1 22.89 1 21.509V3h4V1a1 1 0 012 0v2h11V1a1 1 0 012 0v2h4zm-8.177 14.517h1.374v-1.81H19v-1.381h-1.803v-1.81h-1.374v1.81h-1.815v1.38h1.815v1.811zm-3.38 1.48H7.566v-1.3l2.995-3.446c.293-.344.418-.591.418-.96 0-.589-.349-.992-.969-.992-.484 0-.98.247-.98 1.016H7.566c0-1.45 1.07-2.32 2.444-2.32 1.419 0 2.433.88 2.433 2.308 0 .769-.303 1.183-.856 1.818l-2.242 2.575h3.098v1.302z"
    />
  </svg>
);

export default withIcon(IconCalendar2DaysOutlined);
