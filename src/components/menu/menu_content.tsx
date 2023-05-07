/**
 * MENU CONTENT
 * 2023-2023
 * V 0.0.1
 */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { NavCellBox, Box } from "../h.tsx"
import { get_css_value} from "./../../utils/h.tsx";
import tree from "./../../../medias/tree.json";
import { RegionContext } from "../../context";



// need to define properly the any... it's very too much and very lazy !
interface Props {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
}


export const MenuContent: FC<Props> =({className_box, style_box, className_cell, style_cell}) => {
  const { lang } = useContext(RegionContext);
  let hh = get_css_value("--height_header");
	let hhc = get_css_value("--height_header_cell");
	let height_header = 0;
	let height_header_cell = 0;
	if(hh !== undefined && hhc !== undefined) {
		height_header = +hh.slice(0,-2);
		height_header_cell = +hhc.slice(0,-2);
	}

  const temp_box = {
		position: "relative",
		top: (height_header - height_header_cell) * 0.5+"px",
		background: get_css_value("--color_menu_big"),
	};

  const temp_cell = {
		whiteSpace: "nowrap",
		position: "absolute",
		top: "50%",
		left: "50%",
		webkitTransform: "translate(-50%, -50%)",
		transform: "translate(-50%, -50%)",
	};

  const box = Object.assign({}, style_cell, temp_box);
	const cell = Object.assign({}, temp_cell);

  return <Box className={className_box} style={style_box}>
    <NavCellBox to="/about" style_box={box} style_cell={cell}>{tree[lang].about}</NavCellBox>
		<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree[lang].contact}</NavCellBox>
  </Box>
}
