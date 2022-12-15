import React from 'react';
import withIcon from './withIcon';

const IconArrowLeftOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.72368 21.437L0.560024 13.3466C-0.186677 12.601 -0.186677 11.3955 0.560023 10.6498L8.72368 2.55949C9.47838 1.81383 10.6975 1.81383 11.4522 2.55949C12.2009 3.30516 12.2009 4.51861 11.4522 5.26627L6.67976 10.0081L21.9981 10.0081C23.1052 10.0081 24 10.9037 24 12.0072C24 13.1127 23.1052 14.0063 21.9981 14.0063L6.64773 14.0063L11.4522 18.7522C12.2009 19.4979 12.2009 20.6993 11.4522 21.445C10.6975 22.1906 9.47839 22.1826 8.72368 21.437Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default withIcon(IconArrowLeftOutlined);
