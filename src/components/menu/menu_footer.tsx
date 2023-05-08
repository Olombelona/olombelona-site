/**
 * MENU FOOTER CONTET
 * 2023-2023
 * V 0.0.1
 */

// REACT
import React from "react";
import { useContext } from "react";
// APP
import { NavCell } from "../gui";
import tree from "./../../../medias/tree.json";
import { RegionContext } from "../../context";

export function Legal() {
	const { lang } = useContext(RegionContext);

	const style_cell = {
		padding : "0 1em",
		cursor: "pointer",
	}
	
	return <NavCell to="/legal" style={style_cell}>{tree[lang].legal}</NavCell>
}