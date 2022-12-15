import React from 'react';
import withIcon from './withIcon';

const IconBillsVerticalOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 15h4v-2H6v2zm0-4h5V9H6v2zm0-4h7V5H6v2zm14 15H4V2h12v4h4v16zM17.424 0H2v24h20V4.576L17.424 0zm.133 17.082c0 .789-.586 1.318-1.557 1.446v-2.81c.911.22 1.557.524 1.557 1.364zm-4.105-4.346c0-.764.564-1.22 1.548-1.282v2.577c-.873-.218-1.548-.5-1.548-1.295zM16 9h-1v1.267c-1.822.098-2.991 1.094-2.991 2.609 0 1.598 1.166 2.214 2.991 2.621v3.005c-.957-.13-1.749-.591-2.251-1.373l-1.149.678c.67 1.132 1.891 1.813 3.4 1.923V21h1v-1.286c1.837-.183 3-1.241 3-2.815 0-1.69-1.356-2.248-3-2.635v-2.738a2.97 2.97 0 011.72 1.064l1.069-.723c-.654-.87-1.632-1.39-2.789-1.548V9z"
    />
  </svg>
);

export default withIcon(IconBillsVerticalOutlined);
