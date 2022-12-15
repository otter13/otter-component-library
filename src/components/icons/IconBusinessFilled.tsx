import React from 'react';
import withIcon from './withIcon';

const IconBusinessFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.018 2.543L4.208 6H2a2 2 0 00-2 2v4c0 1.222.543 1.92 1.227 2.358.737.471 1.661.642 2.273.642H8a2 2 0 012-2h4a2 2 0 012 2h5c.59 0 1.497-.185 2.228-.711.285-.206.555-.47.772-.816V8a2 2 0 00-2-2h-2.131l-.811-3.457A2 2 0 0017.11 1H6.966a2 2 0 00-1.948 1.543zM8 17H3.5c-.888 0-2.214-.23-3.352-.958L0 15.944V22a2 2 0 002 2h20a2 2 0 002-2v-5.829A6.088 6.088 0 0121 17h-5a2 2 0 01-2 2h-4a2 2 0 01-2-2zm9.201-13.614L17.814 6H6.262l.613-2.614A.5.5 0 017.362 3h9.352a.5.5 0 01.487.386zM10 15h4v2h-4v-2z"
    />
  </svg>
);

export default withIcon(IconBusinessFilled);
