import React from 'react';
import withIcon from './withIcon';

const IconStreetAddressOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.887 7c.068-.389.113-.782.113-1.178C23 2.612 20.309 0 17 0s-6 2.612-6 5.822c0 .359.039.715.094 1.068L6 3.834l-6 3.6V24l6-2.834L10.723 24H24V7h-1.113zM10 21l-3-1.566V6.766l3 1.8V21zm-8 0l3-1.566V6.766l-3 1.8V21zm10 1V9.616c1.221 2.437 3.255 4.454 4.333 5.416l.667.595.665-.595c1.079-.964 3.114-2.984 4.335-5.421V22H12zm4.999-9.083C18.45 11.496 21 8.602 21 5.822 21 3.715 19.206 2 17 2s-4 1.715-4 3.822c0 2.786 2.548 5.676 3.999 7.095zM19 6c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2zm-2.03 10.922l1.452-1.452 1.048 1.048-1.453 1.451 1.453 1.453-1.048 1.048-1.453-1.453-1.451 1.453-1.048-1.048 1.452-1.453-1.452-1.451 1.048-1.048 1.451 1.452z"
    />
  </svg>
);

export default withIcon(IconStreetAddressOutlined);
