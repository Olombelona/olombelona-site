/**
 * GUI
 * 2023-2023
 * v 0.0.1
 * 
 * */
// REACT
import React, { FC, useState } from "react";
// GATSBY
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
// APP
import { Box } from "./h.tsx";
import { get_css_value, name_to_hex, hex_to_rgb, rgb_to_filter } from "./../utils/h.tsx";


///////////////////
// BUTTON
///////////////////
interface ButtonProps {
  what: string;
}

export const Button : FC<ButtonProps> = ({what}) => {
  let button_style = {
  // const button_style = {
    color: "yellow",
    padding: 4,
    background: "magenta",
    fontSize: "1.25rem",
    borderRadius: 4,
    cursor: "pointer",
  }

  const [is, set_is] = useState(false);
  const toggle_button = () => {
    if (is) {
      // button_style.background = "cyan";
      set_is(false);
    } else {
      // button_style.background = "magenta";
      set_is(true);
    }
  }

  return (
    <>
       <div>
        <code onClick={() => toggle_button()} style={button_style}>{what}</code>
      </div>
    </>
  )
}



//////////////////////////
// NAVIGATION
////////////////////////

/////////////
// NAVIGATION
/////////////
interface NavProps {
  children ?: any;
  to ? : any;
  className?: string;
  style?: any;
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
}

export const NavCell: FC<NavProps> = ({to, className, style, children}) => {
	function mouse_click(event: { preventDefault: () => void; }) {
		event.preventDefault();
		navigate(to);
	}
	return <div className={className} style={style} onClick={mouse_click}>{children}</div>
}

export const NavCellBox: FC<NavProps> = ({to, className_box, style_box, className_cell, style_cell, children}) =>{
	return <Box className={className_box} style={style_box}>
			<NavCell to={to} className={className_cell} style={style_cell}>{children}</NavCell>
		</Box>
}



export const GoHome: FC<NavProps> = ({className_box, style_box, className_cell, style_cell}) => {
	let size = get_css_value("--height_header_cell");
	if(size === undefined) {
		size = "100px";
	}
  size = size.slice(0,-2);

	// a trick to change the color of svg
	let name = get_css_value("--color_2");
  if(name === undefined) {
    name = "black";
  }
	let hex = name_to_hex(name);
	let rgb = hex_to_rgb(hex);
  if(rgb === null) {
    rgb = [0,0,0]; // black
  }
	let result = rgb_to_filter(rgb);
	const img_style = {
		filter: result.filter,
	}


	return <NavCellBox to="/" className_box={className_box} style_box={style_box} className_cell={className_cell} style_cell={style_cell}>
		<div style={{maxWidth: size+"px", maxHeight:size+"px"}}>
			<StaticImage 	src="./../../../media/images/home.png" alt="Home" 
										placeholder="blurred" layout="constrained"
										imgStyle={img_style} />
		</div>
	</NavCellBox>
}