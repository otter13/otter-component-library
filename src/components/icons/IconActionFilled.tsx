import React from 'react';
import withIcon from './withIcon';

const IconActionFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.4343 0.0905213C13.8786 0.283359 14.1425 0.745977 14.0824 1.22652L13.1448 8.72753H21.7272C22.1505 8.72753 22.5355 8.9724 22.7151 9.35572C22.8946 9.73905 22.8362 10.1916 22.5652 10.5168L11.6562 23.6077C11.3462 23.9797 10.828 24.1028 10.3838 23.91C9.93952 23.7171 9.6756 23.2545 9.73567 22.774L10.6733 15.273H2.09092C1.66763 15.273 1.28255 15.0281 1.10301 14.6448C0.923465 14.2614 0.981878 13.8089 1.25286 13.4837L12.1619 0.392829C12.4719 0.0207939 12.9901 -0.102316 13.4343 0.0905213ZM4.42004 13.0911H11.909C12.222 13.0911 12.5198 13.2255 12.7269 13.4601C12.934 13.6947 13.0303 14.0069 12.9915 14.3174L12.3621 19.3524L19.3981 10.9093H11.909C11.5961 10.9093 11.2983 10.775 11.0912 10.5404C10.8841 10.3058 10.7878 9.99362 10.8266 9.68313L11.456 4.64805L4.42004 13.0911Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default withIcon(IconActionFilled);
