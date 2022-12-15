import React from 'react';
import withIcon from './withIcon';

const IconHoldMailOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.82 2.917H3.775v10.541H1.888V1h19.82v11.452a5.328 5.328 0 00-1.558-.23c-.113 0-.217 0-.33.02V2.916zm-5.663 5.75h3.775V4.832h-3.775v3.833zm8.476 6.418a3.73 3.73 0 00-5.052.073l-2.263 2.134h-.269c.034-.161.052-.328.052-.499v-3.335H8.27l-3.765 1.917H0v6.708h4.496L8.271 24h8.766L24 16.3l-1.367-1.215zM8.717 22.083h7.49L21.3 16.45a1.862 1.862 0 00-2.436.115l-2.807 2.643h-5.675v-1.916h2.359c.256 0 .472-.228.472-.499v-1.418H8.718l-3.055 1.554v3.604l3.054 1.55zm-6.83-1.916h1.888v-2.875H1.888v2.875zm9.439-10.542H5.663V7.708h5.663v1.917zM5.663 12.5h3.775v-1.917H5.663V12.5z"
    />
  </svg>
);

export default withIcon(IconHoldMailOutlined);
