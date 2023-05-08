/**
 * 
 * COLOR CONVERTOR
 * v 0.2.2
 * 2021-2023
 * 
 * https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
 * https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
 * https://github.com/GMchris/CoffeeColors
 * https://github.com/angel-rs/css-color-filter-generator
 * convert to filter color css
 * https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991
 * */

import { Color, Solver } from "./color_convertor_for_filter_css";
/**
 * Assumes all values in the set is from to[0,1]
 * value is return in the range [0,1]
 */
export function rgb_to_filter(rgb  : number[]) {
  if(rgb !== null && rgb.length === 3) {
    let color = new Color(rgb[0] *255, rgb[1] *255, rgb[2] *255);
    let solver = new Solver(color);
    let result = solver.solve();
    return result;
  }
  return "";
}

export function hex_to_rgb(str : string){
  if(str !== undefined && str !== null) {
    if(str[0] === "#") {
      str = str.substring(1);
    }

    if(str.length === 3) {
      let a = str[0];
      let b = str[1];
      let c = str[2];
      str = a+a+b+b+c+c;
    }

    if(str.length !== 6){
      throw "Only six-digit hex colors are allowed.";
    }

    let rgb_hex = str.match(/.{1,2}/g);
    let arr: number[];
    if(rgb_hex !== null) {
      arr = [
        parseInt(rgb_hex[0], 16) /255,
        parseInt(rgb_hex[1], 16) /255,
        parseInt(rgb_hex[2], 16) /255
      ];
      return arr;
    }
    return null;
  }
  return null;
}
  

export function hsl_to_hex(x: number, y: number, z: number) {
  let ret = hsl_to_rgb(x, y, z)
  return `#${to_hex_color(ret[0])}${to_hex_color(ret[1])}${to_hex_color(
    ret[2]
  )}`
}

export function hsb_to_hex(x: number, y: number, z: number) {
  let ret = hsb_to_rgb(x, y, z)
  return `#${to_hex_color(ret[0])}${to_hex_color(ret[1])}${to_hex_color(
    ret[2]
  )}`
}

export function to_hex_color(value: number) {
  return to_hex(value * 255)
}

export function to_hex(value: number) {
  const hex = Math.round(value).toString(16)
  return hex.length === 1 ? "0" + hex : hex
}

export function hsl_to_rgb(h: number, s: number, l: number) {
  let r, g, b
  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue_to_rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue_to_rgb(p, q, h + 1 / 3)
    g = hue_to_rgb(p, q, h)
    b = hue_to_rgb(p, q, h - 1 / 3)
  }
  return [r, g, b]
}

export function hsb_to_rgb(h: number, s: number, v: number) {
  let r: number, g: number, b: number, i: number, f: number, p: number, q: number, t: number;
  r = g = b = i= f= p = q = t = 0;
  i = Math.floor(h * 6)
  f = h * 6 - i
  p = v * (1 - s)
  q = v * (1 - f * s)
  t = v * (1 - (1 - f) * s)
  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
    default:
  }

  return [r, g, b]
}
