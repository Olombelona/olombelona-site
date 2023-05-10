/**
 * MENU FOOTER CONTET
 * 2023-2023
 * V 0.0.1
 */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { NavCell } from "../gui";
import tree from "./../../../medias/tree.json";
import { RegionContext } from "../../context";

export function Legal() {
	const { lang } = useContext(RegionContext);

	const style_cell = {
		paddingLeft : "0.5em",
		textTransform: "capitalize",
		cursor: "pointer",
	}
	
	return <NavCell to="/legal" style={style_cell}>{tree[lang].legal}</NavCell>
}
interface Props {
	style?: any,
	children? : React.ReactNode;
}

export const InfoFooter: FC<Props> = ({style, children}) => {
	return <div style={style}>{children}</div>
}