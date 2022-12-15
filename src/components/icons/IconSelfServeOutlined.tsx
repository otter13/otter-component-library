import React from 'react';
import withIcon from './withIcon';

const IconSelfServeOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.342 3.283V2c0-1.274.973-2 2.158-2h8.648C23.008 0 24 .158 24 2v16h-6.049a6.507 6.507 0 00-1.01-1.186 5.3 5.3 0 00-1.19-.814H22V3c.027-.428-.162-.94-1-1h-8c-.706 0-1 .32-1 1v1.096a6.227 6.227 0 00-1.658-.813zM13 9.999C13 13.454 10.74 15 8.5 15 5.392 15 4 12.489 4 10c0-3.454 2.259-5 4.499-5C11.608 5 13 7.511 13 10zm-4.435 5.98c1.639 0 4.644.24 6.377 1.835 1.41 1.302 2.188 3.178 2.188 5.283V24H0v-.903c0-2.105.778-3.981 2.188-5.283 1.732-1.596 4.738-1.835 6.377-1.835zM19 13h-4V5h4v8z"
    />
  </svg>
);

export default withIcon(IconSelfServeOutlined);
