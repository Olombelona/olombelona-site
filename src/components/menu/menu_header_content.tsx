/**
 * MENU HEADER CONTET
 * 2023-2023
 * V 0.0.3
 */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { NavCellBox, Box, GoHome, LangToggle, ProductsDropdown } from "../hc.tsx"
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

  const temp_box: React.CSSProperties = {
		position: "relative",
		display: "flex",
		alignItems: "center",
		background: get_css_value("--color_menu_big") ?? undefined,
	};

  const temp_cell: React.CSSProperties = {
		whiteSpace: "nowrap",
	};

  const box = Object.assign({}, style_cell, temp_box);
	const cell = Object.assign({}, temp_cell);

	// may be this elements can be passed like a children ????
  return <Box className={className_box} style={style_box}>
		<nav aria-label="Navigation principale" style={{display: "contents"}}>
			{in_line !== false ? <GoHome className_box="header_cell" style_box={box} style_cell={cell}/> : <></>}
			{/* {in_line !== false ? <GoHome className_box={"home_box"} style_box={box} style_cell={cell}/> : <></>} */}
			<NavCellBox to="/about" className_box="header_cell" style_box={box} style_cell={cell}>{tree[lang].about}</NavCellBox>
			<ProductsDropdown className_box="header_cell" style_box={box} style_cell={cell} />
			<NavCellBox to="/contact" className_box="header_cell" style_box={box} style_cell={cell}>{tree[lang].contact}</NavCellBox>
		</nav>
		<LangToggle className_box="header_cell" style_box={box} style_cell={cell} />

		{/* {in_line === true ? 
			<DropdownRadioGroup style_box={box} style_cell={cell} offset={(height_header - height_header_cell) * 0.5+"px"} in_line={in_line} /> : 
			<DropdownClassic style_box={box} style_cell={cell} offset={offset_dropdown} in_line={in_line} />
		} */}
  </Box>
}