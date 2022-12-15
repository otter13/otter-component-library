import hexOpacity from 'hex-opacity';

export const opacify = hexOpacity.create;

// https://css-tricks.com/snippets/javascript/lighten-darken-color/
// modified to use decimal percentage, 1 being the max and 0 the minimum
function LightenDarkenColor(col, amt) {
  amt = amt * 100;
  var usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  const newValue = (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);

  if (newValue.length === 7) {
    return newValue;
  } else {
    return (usePound ? '#' : '') + col;
  }
}

export const lighten = LightenDarkenColor;
export const darken = (col, amt) => LightenDarkenColor(col, -amt);
