import React from 'react';
import withIcon from './withIcon';

const IconAmexOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 3h19C22.879 3 24 4.121 24 5.5v13c0 1.379-1.121 2.5-2.5 2.5h-19A2.502 2.502 0 010 18.5v-13C0 4.121 1.121 3 2.5 3zm0 2a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-19zm1.334 5L2 13.973h1.089l.401-.886h2.092l.4.886h2.093v-2.926l1.404 2.926h.945l1.404-2.9v2.9h1.032V10h-1.634l-1.289 2.685L8.677 10H7.042v3.839L5.209 10H3.834zm10.401 0v3.973h3.954l1.26-1.315L20.654 14H22l-1.863-2.04L22 10.027h-1.318l-1.203 1.235L18.332 10h-4.097zm-9.742.86l.659 1.368h-1.26l.6-1.369zm10.774 0l2.521.026 1.003 1.074-1.146 1.18h-2.378v-.778h2.292v-.751h-2.293v-.752z"
    />
  </svg>
);

export default withIcon(IconAmexOutlined);
