/**
 * MENU HEADER CONTET
 * 2023-2023
 * V 0.0.3
 */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { NavCellBox, Box, GoHome, LangToggle } from "../hc.tsx"
import { get_css_value } from "../../utils/hu.tsx";
import tree from "./../../../medias/tree.json";
import { RegionContext } from "../../context.tsx";



// need to define properly the any... it's very too much and very lazy !
interface Props {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
	in_line ?: boolean
}


export const MenuHeaderContent: FC<Props> =({className_box, style_box, className_cell, style_cell, in_line}) => {
  const { lang } = useContext(RegionContext);
  let hh = get_css_value("--height_header");
	let hhc = get_css_value("--height_header_cell");
	let height_header = 0;
	let height_header_cell = 0;
	if(hh !== undefined && hhc !== undefined) {
		height_header = +hh.slice(0,-2);
		height_header_cell = +hhc.slice(0,-2);
	}

  const temp_box: React.CSSProperties = {
		position: "relative",
		top: (height_header - height_header_cell) * 0.5+"px",
		background: get_css_value("--color_menu_big") ?? undefined,
	};

  const temp_cell: React.CSSProperties = {
		whiteSpace: "nowrap",
		position: "absolute",
		top: "50%",
		left: "50%",
		WebkitTransform: "translate(-50%, -50%)",
		transform: "translate(-50%, -50%)",
	};

  const box = Object.assign({}, style_cell, temp_box);
	const cell = Object.assign({}, temp_cell);

	// may be this elements can be passed like a children ????
  return <Box className={className_box} style={style_box}>
		<nav aria-label="Navigation principale" style={{display: "contents"}}>
			{in_line !== false ? <GoHome style_box={box} style_cell={cell}/> : <></>}
			{/* {in_line !== false ? <GoHome className_box={"home_box"} style_box={box} style_cell={cell}/> : <></>} */}
			<NavCellBox to="/about" style_box={box} style_cell={cell}>{tree[lang].about}</NavCellBox>
			<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree[lang].contact}</NavCellBox>
		</nav>
		<LangToggle style_box={box} style_cell={cell} />

		{/* {in_line === true ? 
			<DropdownRadioGroup style_box={box} style_cell={cell} offset={(height_header - height_header_cell) * 0.5+"px"} in_line={in_line} /> : 
			<DropdownClassic style_box={box} style_cell={cell} offset={offset_dropdown} in_line={in_line} />
		} */}
  </Box>
}