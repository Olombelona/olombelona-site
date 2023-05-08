/**
 * Menu big
 * this menu is a generic one 
 * for the desktop or computer
 * 2023-2023
 * v 0.0.3
 * 
 * */

// REACT
import React from "react";
// APP
import { get_css_value}  from "../../utils/h_u";
import { MenuContent } from "./menu_header";

const header_box_style = {
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",

	height: get_css_value("--height_header"),
	maxWidth: get_css_value("--width_header_max"),
}

const style_cell = {
	width: get_css_value("--width_header_cell"),
	height: get_css_value("--height_header_cell"),
	fontFamily: get_css_value("--font_title"),
  fontWeight: 700,
  fontSize: 20,
	cursor: "pointer",
}

export function MenuBig() {
	return <MenuContent className_box="header" style_box={header_box_style} style_cell={style_cell} in_line={true}/>
}