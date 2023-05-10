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
import { Legal, InfoFooter } from "../menu/menu_footer";

const style_footer = {
	margin: "auto 0",
	display: "flex",
	alignItems: "center",
	justifyContent : "center",
	width: "100%",
	height: "50px",
  color: get_css_value("--color_text_light"),
	background: get_css_value("--color_footer"),
}

const style_cell = {
	paddingLeft : "0.5em",
	paddingRight : "0.5em",
	textTransform: "capitalize",
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
		<InfoFooter style={style_cell}>{data.site.siteMetadata.title} {year}</InfoFooter>
		<InfoFooter style={style_cell}>|</InfoFooter>
		<Legal/>
	</div>
}