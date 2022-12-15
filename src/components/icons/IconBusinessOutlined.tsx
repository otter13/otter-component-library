import React from 'react';
import withIcon from './withIcon';

const IconBusinessOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.207 6l.811-3.457A2 2 0 016.966 1H17.11a2 2 0 011.948 1.543L19.868 6H22a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2h2.207zm13.607 0l-.613-2.614A.5.5 0 0016.714 3H7.362a.5.5 0 00-.487.386L6.262 6h11.552zM4 17a3.982 3.982 0 01-2-.535V21.5a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-5.035A3.982 3.982 0 0120 17h-4a2 2 0 01-2 2h-4a2 2 0 01-2-2H4zm4-2a2 2 0 012-2h4a2 2 0 012 2h4a2 2 0 002-2V8.5a.5.5 0 00-.5-.5h-19a.5.5 0 00-.5.5V13a2 2 0 002 2h4zm2 0v2h4v-2h-4z"
    />
  </svg>
);

export default withIcon(IconBusinessOutlined);
