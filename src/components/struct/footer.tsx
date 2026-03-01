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

export function Footer() {
  const style_footer = {
	margin: "auto 0",
	display: "flex",
	alignItems: "center",
	justifyContent : "center",
	width: "100%",
	height: "50px",
  }

  const style_cell = {
	paddingLeft : "0.5em",
	paddingRight : "0.5em",
	textTransform: "capitalize" as const,
  }
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
	return <footer className="footer" style={style_footer}>
		<InfoFooter style={style_cell}>{data.site.siteMetadata.title} {year}</InfoFooter>
		<span aria-hidden="true" style={style_cell}>|</span>
		<Legal/>
	</footer>
}