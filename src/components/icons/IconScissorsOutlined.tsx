import React from 'react';
import withIcon from './withIcon';

const IconScissorsOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.956 20C2.877 20 2 19.103 2 18s.877-2 1.956-2 1.956.897 1.956 2-.877 2-1.956 2zm.037-16c1.099 0 1.993.914 1.993 2.038 0 1.123-.894 2.037-1.993 2.037C2.894 8.075 2 7.161 2 6.038 2 4.914 2.894 4 3.993 4zm19.385 12.149L13.307 12.04l10.071-4.114a1 1 0 00-.755-1.852L10.661 10.96 6.413 9.227a4.036 4.036 0 001.573-3.189C7.986 3.811 6.195 2 3.993 2S0 3.811 0 6.038a4.025 4.025 0 002.7 3.8c.045.028.08.067.131.088l5.185 2.115-4.977 2.033c-.05.021-.084.059-.129.086A3.987 3.987 0 000 18c0 2.206 1.775 4 3.956 4s3.956-1.794 3.956-4a3.993 3.993 0 00-1.526-3.132l4.276-1.747L22.623 18a1 1 0 00.755-1.851z"
    />
  </svg>
);

export default withIcon(IconScissorsOutlined);
