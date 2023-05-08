/**
 * tools function
 * 2023-2023
 * v 0.0.1
 * */


export function get_css_value(name: string) {
  const browser_is = typeof window !== "undefined";
  if(browser_is) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  } else return undefined;
}