/**
 * Layout
 * 2023-2023
 * v 0.0.1
 * 
 * */
// REACT
import React, { FC } from "react";
// APP
import { Header } from "./header";
import { get_css_value } from "../../utils/tools";

interface Props {
  children? : React.ReactNode;
}

const pageStyles = {
  background : get_css_value("--layout_bg"),
  color: get_css_value("--color_text"),
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 42,
  paddingRight: 42,
  borderTop: "2px solid " + get_css_value("--color_line"),
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export const Layout: FC<Props> = ({children}) => {
  return (<>
    <Header/>
    <div style={pageStyles}>
      {children}
    </div>
    </>
  );
};
