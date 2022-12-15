import React from 'react';
import withIcon from './withIcon';

const IconShopOutlined = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.238 2l.894 3.25 2.711 11.22A2 2 0 008.787 18h10.151a2 2 0 001.94-1.515L24 4H5.862l-.696-2.53A2 2 0 003.238 0H0v2h3.238zm5.55 14L6.37 6h15.068l-2.5 10H8.788zM10 24a2 2 0 100-4 2 2 0 000 4zm10-2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export default withIcon(IconShopOutlined);
