/**
 * Menu big
 * this menu is a generic one 
 * for the desktop or computer
 * 2023-2023
 * v 0.0.4
 * 
 * */

// REACT
import React from "react";
// APP
import { get_css_value}  from "../../utils/hu";
import { MenuHeaderContent } from "./menu_header_content";

export function MenuHeaderBig() {
  const header_box_style = {
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
	height: get_css_value("--height_header") ?? undefined,
	maxWidth: get_css_value("--width_header_max") ?? undefined,
  }

  const style_cell = {
	width: "min(100px, 25%)",
	height: get_css_value("--height_header_cell") ?? undefined,
	fontFamily: get_css_value("--font_title") ?? undefined,
    fontWeight: 700,
	cursor: "pointer",
  }
	return <MenuHeaderContent className_box="header" style_box={header_box_style} style_cell={style_cell} in_line={true}/>
}