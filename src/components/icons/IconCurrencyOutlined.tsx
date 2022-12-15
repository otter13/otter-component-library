import React from 'react';
import withIcon from './withIcon';

const IconCurrencyOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.432 16.063c0 1.456-1.193 2.456-2.932 2.696v-5.352c1.667.544 2.932 1.25 2.932 2.589v.067zm-7.95-8.294V7.7c0-1.326 1.167-2.33 3.018-2.486v5.038c-1.702-.56-3.018-1.228-3.018-2.484zm5.018 3.087V5.33c1.317.243 2.663.779 3.882 1.53l1.23-1.947c-1.47-.927-3.311-1.576-5.112-1.811V0h-2v3.02c-3.29.199-5.62 2.123-5.62 4.95v.067c0 3.044 2.88 4.039 5.62 4.795v5.898c-1.761-.234-3.515-.975-5.128-2.13L5 18.447c1.775 1.374 4.189 2.288 6.5 2.503V24h2v-3.053c3.146-.315 5.5-2.163 5.5-5.153v-.066c0-2.998-2.787-4.077-5.5-4.872z"
    />
  </svg>
);

export default withIcon(IconCurrencyOutlined);
