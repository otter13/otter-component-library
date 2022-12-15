import React from 'react';
import withIcon from './withIcon';

const IconBillsHorizontalOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 23V1h19.424L24 5.576V23H0zM18 3H2v18h20V6.999h-4V3zm-.357 6h-1.516v1.76c-1.326.189-2.152.96-2.152 2.073 0 1.43 1.282 1.874 2.728 2.15 1.104.206 1.73.352 1.73.965 0 .568-.56.92-1.457.92-.932 0-1.686-.368-2.123-1.037l-.051-.078-1.225.667.053.09c.497.824 1.393 1.342 2.497 1.51V20h1.516v-1.961c1.4-.22 2.3-1.056 2.3-2.227 0-1.498-1.422-1.904-2.916-2.2-.956-.196-1.542-.344-1.542-.883 0-.456.362-.648.72-.73h1.11c.544.11 1.005.378 1.33.783l.057.069 1.154-.721-.067-.087c-.507-.657-1.253-1.083-2.146-1.25V9zM15 8H4V6h11v2zM4 12h7v-2H4v2zm5 4H4v-2h5v2z"
    />
  </svg>
);

export default withIcon(IconBillsHorizontalOutlined);
