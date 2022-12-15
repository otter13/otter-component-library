import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const withIcon = (Component) => {
  Component.DataUri = ({ width = 24, height = 24, fill = 'currentColor', ...props }) =>
    encodeURIComponent(renderToStaticMarkup(<Component width={width} height={height} fill={fill} {...props} />));

  Component.CssBackground = (props) => `data:image/svg+xml;charset=utf8,${Component.DataUri(props)}`;

  return Component;
};

export default withIcon;
