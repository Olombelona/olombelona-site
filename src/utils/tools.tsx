export function get_css_value(name) {
  const browser_is = typeof window !== "undefined";
  if(browser_is) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  } else return undefined;
}