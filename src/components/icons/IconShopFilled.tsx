import React from 'react';
import withIcon from './withIcon';

const IconShopFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.132 5.25L3.238 2H0V0h3.238a2 2 0 011.928 1.47L5.862 4H24l-3.121 12.485A2 2 0 0118.939 18H8.786a2 2 0 01-1.944-1.53L4.132 5.25zM10 24a2 2 0 100-4 2 2 0 000 4zM20 22a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export default withIcon(IconShopFilled);
