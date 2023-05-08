/**
 * Layout
 * 2023-2023
 * v 0.0.2
 * 
 * */
// REACT
import React from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
// APP
import { get_css_value } from "../../utils/tools";
import { Legal } from "../menu/menu_footer";

const style_footer = {
	margin: "auto 0",
	display: "flex",
	alignItems: "center",
	justifyContent : "center",
	width: "100%",
	height: "50px",
	background: get_css_value("--color_footer"),
}



export function Footer() {
	const data = useStaticQuery(
    graphql`
			query {
				site {
					siteMetadata {
						title
						version
					}
				}
			}
    `
	)

	const year = new Date().getFullYear();
	return <div className="footer" style={style_footer}>
		<div>{data.site.siteMetadata.title} {year}</div>
		<Legal/>
	</div>
}